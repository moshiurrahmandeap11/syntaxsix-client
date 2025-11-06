import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Megaphone, 
  Globe, 
  Shield, 
  ShoppingCart,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router'; // অথবা next/link যদি Next.js হয়

const services = [
  {
    icon: <Code2 className="w-10 h-10" />,
    title: "Web Development",
    desc: "Custom websites that load in <0.8s. Built with Next.js, React, Laravel & WordPress. From startup MVP to enterprise platforms.",
    link: "/services/web-development",
    badge: "Most Popular"
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Mobile App Development",
    desc: "iOS & Android apps with Flutter & React Native. 50,000+ active users. Published on App Store & Play Store with zero crashes.",
    link: "/services/app-development",
    badge: "Fast Delivery"
  },
  {
    icon: <Megaphone className="w-10 h-10" />,
    title: "Digital Marketing",
    desc: "Facebook, Google, TikTok Ads + SEO. 300% average ROI. We manage ৳15 Crore+ monthly ad spend for Bangladeshi brands.",
    link: "/services/digital-marketing",
    badge: "Guaranteed ROI"
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Domain & Hosting",
    desc: "Blazing-fast NVMe hosting with 100/100 Lighthouse. Free SSL, CDN, Daily Backup. Trusted by 8,000+ websites in Bangladesh.",
    link: "/services/hosting",
    badge: "99.99% Uptime"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Cyber Security",
    desc: "Penetration testing, malware removal, firewall setup. Protected bKash, Daraz & 200+ e-commerce stores from attacks.",
    link: "/services/cyber-security",
    badge: "Bank-Grade"
  },
  {
    icon: <ShoppingCart className="w-10 h-10" />,
    title: "E-Commerce Solutions",
    desc: "Full-stack Shopify, WooCommerce & custom stores. Integrated with bKash, Nagad, SSLCommerz. ৳250 Crore+ transactions processed.",
    link: "/services/ecommerce",
    badge: "Payment Ready"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -20, transition: { duration: 0.5 } }}
      className="group relative"
    >
      <Link to={service.link} className="block">
        <div className="relative p-10 rounded-3xl bg-white/8 backdrop-blur-3xl border border-white/30 shadow-2xl hover:bg-white/12 hover:border-white/50 transition-all duration-800 cursor-pointer">
          
          {/* Badge */}
          {service.badge && (
            <span className="absolute -top-4 left-10 px-4 py-1.5 bg-black text-white text-xs font-bold rounded-full shadow-xl">
              {service.badge}
            </span>
          )}

          {/* Glow effects */}
          <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute -inset-2 bg-white/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-800 -z-10" />

          {/* Icon */}
          <div className="inline-flex p-6 rounded-2xl bg-black/10 backdrop-blur-md border border-white/30 shadow-2xl mb-8 group-hover:bg-black/25 group-hover:scale-110 transition-all duration-600">
            <div className="text-black group-hover:text-white transition-colors duration-600">
              {service.icon}
            </div>
          </div>

          <h3 className="text-2xl font-black text-black mb-4 tracking-tight">
            {service.title}
          </h3>
          
          <p className="text-gray-700 leading-relaxed text-base font-light mb-6">
            {service.desc}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-3 text-black font-bold group-hover:gap-5 transition-all duration-500">
            <span>Explore Service</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
          </div>

          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-32"
        >
          <h2 className="text-7xl md:text-9xl font-black text-black tracking-tighter leading-none">
            Our Services
          </h2>
          <div className="mt-10 h-1.5 w-48 bg-black mx-auto" />
          <p className="mt-12 text-2xl md:text-3xl text-gray-700 font-light max-w-5xl mx-auto">
            One agency. Every digital solution you’ll ever need in Bangladesh.
          </p>
        </motion.div>

        {/* Services Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-32"
        >
          <p className="text-lg text-gray-600 font-medium">
            <span className="font-black text-black">Not sure what you need?</span> 
            {" "}Let us build a custom package for you
          </p>
          <Link 
            to="/contact"
            className="mt-8 inline-block px-16 py-6 bg-black text-white font-bold rounded-full hover:bg-gray-900 transform hover:scale-105 transition-all duration-500 shadow-2xl"
          >
            Get Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;