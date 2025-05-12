import { useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

interface ContactProps {
  navigate: (path: string) => void;
}

const Contact = ({ navigate }: ContactProps) => {
  useEffect(() => {
    document.title = 'Insight Blog - Contact Us';
  }, []);
  
  return (
    <div className="animate-fadeIn">
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you!
        </p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full mb-4">
            <Mail size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Email Us
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            For general inquiries:
          </p>
          <a 
            href="mailto:michaelranda95@gmail.com" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            michaelranda95@gmail.com
          </a>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full mb-4">
            <Phone size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Call Us
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Monday to Friday, 9am - 5pm:
          </p>
          <a 
            href="tel:+254745074245" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            +254 (745) 074-245
          </a>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full mb-4">
            <MapPin size={24} />
 
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Visit Us
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            456 Kenyatta Avenue<br />
            Nairobi, 00100<br />
            Kenya
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            We'd love to hear from you! Whether you have a question about our content, want to collaborate, or just want to say hello, fill out the form and we'll get back to you as soon as possible.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              For contributors:
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Interested in writing for Insight Blog? We're always looking for new voices and perspectives.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Send us your writing samples</li>
              <li>Include your areas of expertise</li>
              <li>Tell us about your background</li>
            </ul>
          </div>
        </div>
        
        <div>
          <ContactForm />
        </div>
      </div>
      
      <div className="rounded-lg overflow-hidden h-96 mb-12">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.133264178356!2d36.8166736!3d-1.2863895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6d658b3f5%3A0x1c1cb5e0b1cf3d14!2s456%20Kenyatta%20Ave%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1715523178387!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;