import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useToast } from "../hooks/use-toast";
import { apiRequest } from "../lib/queryClient";
import { contactInfo } from "../lib/data";
import { fadeIn, staggerChildren, fadeInUp } from "../lib/animations";
import Title from "../components/forPage/Title.jsx";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
        variant: "default",
      });
      reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description:
          error.message ||
          "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Creative Agency</title>
        <meta
          name="description"
          content="Get in touch with our team to discuss your project or ask any questions about our services."
        />
      </Helmet>

      {/* Hero Section */}
      <Title
        title=" Get In Touch"
        subtitle="Ready to start your project? Contact us today to discuss how we
              can help bring your vision to life."
      />
      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-third text-3xl font-bold mb-6 font-heading">
                Contact Information
              </h2>
              <p className="text-secondary mb-6">
                Fill out the form or contact us directly using the information
                below.
              </p>

              {[
                {
                  icon: "fa-map-marker-alt",
                  label: "Address",
                  value: contactInfo.address,
                },
                { icon: "fa-phone", label: "Phone", value: contactInfo.phone },
                { icon: "fa-envelope", label: "Email", value: contactInfo.email },
                {
                  icon: "fa-clock",
                  label: "Working Hours",
                  value: contactInfo.workingHours,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start mb-4">
                  <div className="bg-primary-10 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <i className={`fas ${item.icon} text-primary`}></i>
                  </div>
                  <div>
                    <h4 className="text-third font-bold mb-1">{item.label}</h4>
                    <p className="text-secondary whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 font-heading">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {[
                  { id: "name", label: "Full Name", type: "text", error: errors.name },
                  { id: "email", label: "Email Address", type: "email", error: errors.email },
                  { id: "phone", label: "Phone Number", type: "tel" },
                  { id: "subject", label: "Subject", type: "text" },
                ].map(({ id, label, type, error }) => (
                  <div key={id} className="mb-6">
                    <label htmlFor={id} className="block text-black font-medium mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 ${error ? "border-red-500" : "border-muted bg-white"
                        }`}
                      placeholder={`Your ${label}`}
                      {...register(id)}
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                  </div>
                ))}

                <div className="mb-6">
                  <label htmlFor="message" className="block text-black font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`bg-white w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 ${errors.message ? "border-red-500" : "border-muted"
                      }`}
                    placeholder="Your message here..."
                    {...register("message")}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-90 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
