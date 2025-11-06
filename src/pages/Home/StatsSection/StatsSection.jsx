import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: 2500, suffix: "+", label: "Projects Delivered" },
  { number: 8, suffix: "", label: "Years in Business" },
  { number: 98.7, suffix: "%", label: "Client Satisfaction" },
  { number: 850, suffix: " Cr+", label: "Revenue Generated" },
  { number: 8000, suffix: "+", label: "Websites Hosted" },
  { number: 4.9, suffix: "/5", label: "Average Rating" }
];

const StatCard = ({ stat, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-30px 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1, 
        ease: "easeOut" 
      }}
      className="group relative w-full"
    >
      <div className="relative p-4 sm:p-5 md:p-6 lg:p-7 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-center">
        
        {/* Number - PROPERLY RESPONSIVE */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-none mb-2 sm:mb-3">
          {inView ? (
            <CountUp
              end={stat.number}
              duration={2.5}
              decimals={stat.number % 1 !== 0 ? 1 : 0}
              suffix={stat.suffix}
            />
          ) : (
            <span className="text-gray-400">0{stat.suffix}</span>
          )}
        </div>

        {/* Label - PROPERLY RESPONSIVE */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium leading-tight">
          {stat.label}
        </p>

        {/* Hover Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-600 group-hover:w-16 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - SIMPLIFIED & RESPONSIVE */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Numbers Don't Lie
          </h2>
          <div className="w-16 h-1 bg-black mx-auto mb-4" />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by Bangladesh's fastest-growing brands since 2017
          </p>
        </motion.div>

        {/* Stats Grid - TRULY RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Trust Brands */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-semibold text-black">
              bKash • Daraz • Pathao • Grameenphone
            </span>{" "}
            and <span className="font-semibold">2,496+</span> more trust us
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;