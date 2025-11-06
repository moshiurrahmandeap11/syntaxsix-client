import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "Expert Team",
    desc: "10+ years experienced developers, designers & marketers from BUET, DU & top agencies. We speak code like native language."
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: "Custom Solutions",
    desc: "No templates. Every line of code, every pixel, every campaign is built 100% from scratch for your business only."
  },
  {
    icon: <Trophy className="w-12 h-12" />,
    title: "Proven Results",
    desc: "2,500+ projects delivered. Clients include bKash, Daraz, Pathao & 50+ startups now worth $100M+ combined."
  }
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ y: -16, transition: { duration: 0.4 } }}
      className="group relative"
    >
      <div className="relative p-10 rounded-3xl bg-white/8 backdrop-blur-3xl border border-white/30 shadow-2xl hover:bg-white/12 hover:border-white/50 transition-all duration-700">
        
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="absolute -inset-1 bg-white/20 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10" />

        {/* Icon */}
        <div className="inline-flex p-6 rounded-2xl bg-black/10 backdrop-blur-md border border-white/30 shadow-xl mb-8 group-hover:bg-black/20 group-hover:scale-110 transition-all duration-500">
          <div className="text-black group-hover:text-white transition-colors duration-500">
            {feature.icon}
          </div>
        </div>

        <h3 className="text-2xl font-black text-black mb-4 tracking-tight">
          {feature.title}
        </h3>
        
        <p className="text-gray-700 leading-relaxed text-base font-light">
          {feature.desc}
        </p>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </motion.div>
  );
};

const FeatureListSection = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter">
            Why Choose Syntax Six
          </h2>
          <div className="mt-6 h-1 w-32 bg-black mx-auto" />
        </motion.div>

        {/* Feature Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureListSection;