import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Zap, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="w-11 h-11" />,
    title: "Massive Online Presence",
    desc: "Your brand dominates Google, Facebook, TikTok & Instagram. We don’t just build websites – we make you impossible to ignore in Bangladesh."
  },
  {
    icon: <Users className="w-11 h-11" />,
    title: "Insane User Engagement",
    desc: "Average session duration jumps 340%. Visitors don’t just land – they explore, interact, and fall in love with your brand."
  },
  {
    icon: <Zap className="w-11 h-11" />,
    title: "Sky-High Conversion Rates",
    desc: "Leads turn into paying customers 5× faster. Our clients see 200-500% ROI within first 90 days. Numbers don’t lie."
  }
];

const BenefitCard = ({ benefit, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1, delay: index * 0.25, ease: "easeOut" }}
      whileHover={{ y: -20, transition: { duration: 0.5 } }}
      className="group relative"
    >
      <div className="relative p-12 rounded-3xl bg-white/8 backdrop-blur-3xl border border-white/30 shadow-2xl hover:bg-white/12 hover:border-white/50 transition-all duration-800">
        
        {/* Inner glow */}
        <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        {/* Outer glow */}
        <div className="absolute -inset-2 bg-white/25 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-800 -z-10" />

        {/* Icon */}
        <div className="inline-flex p-6 rounded-2xl bg-black/10 backdrop-blur-md border border-white/30 shadow-2xl mb-10 group-hover:bg-black/25 group-hover:scale-115 transition-all duration-600">
          <div className="text-black group-hover:text-white transition-colors duration-600">
            {benefit.icon}
          </div>
        </div>

        <h3 className="text-3xl font-black text-black mb-6 tracking-tight">
          {benefit.title}
        </h3>
        
        <p className="text-gray-700 leading-relaxed text-lg font-light">
          {benefit.desc}
        </p>

        {/* Arrow */}
        <motion.div
          className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ArrowUpRight className="w-8 h-8 text-black" />
        </motion.div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />
      </div>
    </motion.div>
  );
};

const Benefits = () => {
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
            Real Results
          </h2>
          <div className="mt-10 h-1.5 w-48 bg-black mx-auto" />
          <p className="mt-12 text-2xl md:text-3xl text-gray-700 font-light max-w-5xl mx-auto">
            This is what happens when you choose Syntax Six
          </p>
        </motion.div>

        {/* Benefits Grid - 100% Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-32"
        >
          <p className="text-lg text-gray-600 font-medium tracking-wide">
            <span className="font-black text-black">2,500+</span> businesses transformed • 
            <span className="font-black text-black"> ৳850 Crore+</span> revenue generated for clients
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;