import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-10 h-10" />,
    title: "Web Development",
    desc: "Pixel-perfect, blazing-fast websites built with Next.js, React, Laravel & WordPress. From startup landing pages to enterprise dashboards – we craft digital experiences that convert."
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "App Development",
    desc: "Native iOS & Android apps + cross-platform Flutter/React Native solutions. MVP in 14 days. Used by 50,000+ users across Bangladesh."
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Digital Marketing",
    desc: "Facebook, Google, TikTok Ads + SEO that ranks #1 in Bangladesh. 300% average ROI for our clients. We don’t just run ads – we grow businesses."
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 1, delay: index * 0.25, ease: "easeOut" }}
      whileHover={{ y: -24, transition: { duration: 0.5 } }}
      className="group relative"
    >
      {/* Premium Glass Card */}
      <div className="relative p-12 rounded-3xl bg-white/6 backdrop-blur-3xl border border-white/25 shadow-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-800">
        
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-white/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        {/* Hover Border Glow */}
        <div className="absolute -inset-2 bg-white/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-800 -z-10" />

        {/* Icon */}
        <div className="inline-flex p-6 rounded-2xl bg-black/10 backdrop-blur-md border border-white/30 shadow-2xl mb-10 group-hover:bg-black/25 group-hover:scale-115 group-hover:rotate-6 transition-all duration-600">
          <div className="text-black group-hover:text-white transition-colors duration-600">
            {service.icon}
          </div>
        </div>

        <h3 className="text-3xl font-black text-black mb-6 tracking-tighter">
          {service.title}
        </h3>
        
        <p className="text-gray-700 leading-relaxed text-lg font-light">
          {service.desc}
        </p>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />
      </div>
    </motion.div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-32"
        >
 <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-black tracking-tight leading-none">
  Syntax Six
</h2>

          <div className="mt-10 h-1.5 w-48 bg-black mx-auto" />
          <p className="mt-12 text-2xl md:text-3xl text-gray-700 font-light max-w-5xl mx-auto leading-relaxed">
            We build <span className="font-bold text-black">websites</span>,&nbsp;
            <span className="font-bold text-black">mobile apps</span>, and&nbsp;
            <span className="font-bold text-black">growth machines</span><br />
            that dominate Bangladesh’s digital space.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Final CTA */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 0.8 }}
  className="text-center mt-20 sm:mt-32 lg:mt-40 px-4"
>
  <a
    href="#contact"
    className="
      inline-flex items-center gap-3 sm:gap-4 md:gap-5 
      px-6 py-3 sm:px-10 sm:py-4 md:px-16 
      rounded-full bg-black text-white font-black shadow-3xl 
      hover:shadow-4xl hover:bg-gray-900 transform hover:scale-105 
      transition-all duration-500 tracking-tight
      text-base sm:text-lg md:text-xl
      whitespace-nowrap
    "
  >
    Start Your Project Today
    <motion.div
      animate={{ x: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      →
    </motion.div>
  </a>
</motion.div>

      </div>
    </section>
  );
};

export default FeatureSection;