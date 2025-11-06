import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "ShopnoBazaar",
    category: "E-Commerce Platform",
    desc: "Full-stack Next.js + Node.js store with bKash & SSLCommerz. ৳3.2 Cr/month revenue.",
    link: "https://shopnobazaar.com",
    github: null,
    badge: "Live"
  },
  {
    title: "RideShareBD",
    category: "Ride-Hailing App",
    desc: "Flutter + Firebase app for 400K+ users. Real-time tracking, in-app payment.",
    link: "#",
    github: null,
    badge: "400K+ Users"
  },
  {
    title: "BeautyBD",
    category: "Beauty Marketplace",
    desc: "React + Laravel marketplace. 420% ROI on Facebook Ads. #1 in Bangladesh.",
    link: "https://beautybd.com",
    github: null,
    badge: "Top Ranked"
  },
  {
    title: "FoodRush",
    category: "Food Delivery Web App",
    desc: "Next.js 14 + Prisma + PostgreSQL. 0.7s load time. 380% order increase.",
    link: "#",
    github: "https://github.com/syntaxsix/foodrush",
    badge: "Open Source"
  },
  {
    title: "Daraz Clone",
    category: "Enterprise E-Commerce",
    desc: "Microservices architecture. Handles 10M+ monthly visits. Built for scale.",
    link: "#",
    github: null,
    badge: "10M+ Visits"
  },
  {
    title: "Syntax Six Office",
    category: "Office Space",
    desc: "Our Dhaka HQ – where magic happens. 50+ developers, designers & marketers.",
    link: "#",
    github: null,
    badge: "Dhaka HQ"
  }
];

const GalleryCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -20, scale: 1.02, transition: { duration: 0.5 } }}
      className="group relative overflow-hidden rounded-3xl shadow-2xl"
    >
      {/* Image Placeholder with Gradient */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-700" />
        
        {/* Badge */}
        <span className="absolute top-6 left-6 px-4 py-2 bg-white text-black text-xs font-bold rounded-full shadow-xl">
          {project.badge}
        </span>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
          <h3 className="text-2xl sm:text-3xl font-black mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-white/90 mb-3">
            {project.category}
          </p>
          <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
            {project.desc}
          </p>

          {/* Links */}
          <div className="mt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-100 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-sm hover:bg-white/30 transition-all"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GallarySection = () => {
  return (
    <section className="py-32 sm:py-36 md:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-20 sm:mb-24 md:mb-32"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-black tracking-tighter leading-none">
            Our Work
          </h2>
          <div className="mt-6 sm:mt-8 md:mt-10 h-1 w-24 sm:w-32 md:w-48 bg-black mx-auto" />
          <p className="mt-8 sm:mt-10 md:mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
            Real projects. Real businesses. Real results across Bangladesh.
          </p>
        </motion.div>

        {/* Gallery Grid - ULTRA RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {projects.map((project, index) => (
            <GalleryCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20 sm:mt-24 md:mt-32"
        >
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            Want to see more?{" "}
            <a href="#contact" className="font-black text-black underline underline-offset-4">
              Let’s build yours next
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GallarySection;