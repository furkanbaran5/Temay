import { Helmet } from "react-helmet";
import { useToast } from "../hooks/use-toast";
import ContactSection from "../components/home/ContactSection.jsx";

const Contact = () => {
  const { toast } = useToast();
  return (
    <div className="bg-dark">
      <Helmet>
        <title>İletişim | TEMAY events</title>
        <meta
          name="description"
          content="Get in touch with our team to discuss your project or ask any questions about our services."
        />
      </Helmet>
      <div className="mt-10">
        <ContactSection />
      </div>

    </div>
  );
};

export default Contact;
