
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactInfo } from "../../lib/data";
import { staggerChildren, fadeInUp } from "../../lib/animations";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
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
      message: "",
    },
  });

  const onSubmit = (data) => {
    //mail yollama
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <motion.h2
            className="text-third text-3xl md:text-4xl font-bold mb-4 font-heading"
            variants={fadeInUp()}
          >
            İletişim
          </motion.h2>
          <motion.p
            className="text-secondary max-w-2xl mx-auto"
            variants={fadeInUp()}
          >
            Projenize başlamaya hazır mısınız? Vizyonunuzu hayata geçirmenize nasıl yardımcı olabileceğimizi görüşmek için bizimle iletişime geçin.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <motion.div className="mb-8" variants={fadeInUp()}>
              <h3 className="text-third text-2xl font-bold mb-4 font-heading">
                İletişim Bilgileri
              </h3>
              <p className="text-secondary mb-6">
                Formu doldurun veya aşağıdaki bilgileri kullanarak doğrudan bizimle iletişime geçin.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "fa-map-marker-alt", label: "Adres", value: contactInfo.address },
                  { icon: "fa-phone", label: "Telefon", value: contactInfo.phone },
                  { icon: "fa-envelope", label: "Mail", value: contactInfo.email },
                  { icon: "fa-clock", label: "Çalışma Saatleri", value: contactInfo.workingHours },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary-10 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <i className={`fas ${item.icon} text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="text-third font-bold mb-1">{item.label}</h4>
                      <p className="text-secondary whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              {[
                { id: "name", label: "Ad Soyad", type: "text", error: errors.name },
                { id: "email", label: "Mail", type: "email", error: errors.email },
                { id: "phone", label: "Telefon", type: "tel" },
              ].map(({ id, label, type, error }) => (
                <div key={id} className="mb-6">
                  <label htmlFor={id} className="block text-black font-medium mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    className={`bg-white text-black w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 ${error ? "border-red-500" : "border-muted"
                      }`}
                    placeholder={`${label}`}
                    {...register(id)}
                  />
                  {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                </div>
              ))}

              <div className="mb-6">
                <label htmlFor="message" className="block text-black font-medium mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`bg-white text-black w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 ${errors.message ? "border-red-500" : "border-muted"
                    }`}
                  placeholder="Mesajınız..."
                  {...register("message")}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-90 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex justify-center items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Gönderiliyor..." : "Gönder"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;