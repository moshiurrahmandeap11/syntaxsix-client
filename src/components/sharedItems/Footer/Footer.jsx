import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Github,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="px-6 py-20 sm:py-24 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Brand & About */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                Syntax Six
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Bangladesh's #1 digital agency for web development, mobile apps, and growth marketing. 
                Trusted by bKash, Daraz, Pathao & 2,500+ businesses since 2017.
              </p>
              <div className="mt-8 flex gap-4">
                {[Facebook, Linkedin, Twitter, Youtube, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-black mb-6">Quick Links</h3>
              <ul className="space-y-4 text-gray-400">
                {['Home', 'Services', 'Portfolio', 'About Us', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-black mb-6">Services</h3>
              <ul className="space-y-4 text-gray-400">
                {[
                  'Web Development',
                  'Mobile App Development',
                  'Digital Marketing',
                  'UI/UX Design',
                  'E-Commerce Solutions',
                  'Cloud & Hosting',
                  'Cyber Security'
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-black mb-6">Get in Touch</h3>
              <div className="space-y-5 text-gray-400">
                <a href="tel:+8801888888888" className="flex items-center gap-4 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm sm:text-base">01888-888888 (24/7)</span>
                </a>
                <a href="mailto:hello@syntaxsix.com" className="flex items-center gap-4 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm sm:text-base">hello@syntaxsix.com</span>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <p className="text-sm sm:text-base leading-relaxed">
                    Level 12, Bashundhara City<br />
                    Panthapath, Dhaka 1215<br />
                    Bangladesh
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="px-6 py-8 sm:py-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm sm:text-base text-center sm:text-left">
              © 2025 Syntax Six. All rights reserved. Made with <span className="text-red-500">♥</span> in Bangladesh
            </p>
            <div className="flex gap-8 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;