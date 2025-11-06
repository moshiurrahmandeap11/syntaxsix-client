import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahim Khan",
    role: "CEO, ShopnoBazaar.com",
    content: "Syntax Six built our entire e-commerce platform from scratch. Sales jumped from ৳8 lakh to ৳3.2 crore in just 9 months. Best decision we ever made.",
    rating: 5,
    logo: "SB"
  },
  {
    name: "Fatema Akter",
    role: "Founder, BeautyBD",
    content: "Their digital marketing team runs our Facebook & Google ads. We’re getting 420% ROI every single month. I don’t even look at other agencies anymore.",
    rating: 5,
    logo: "B"
  },
  {
    name: "Karim Hossain",
    role: "CTO, RideShareBD",
    content: "Migrated 400,000 users from old app to new Flutter app in just 21 days. Zero downtime. Zero crashes. These guys are monsters at what they do.",
    rating: 5,
    logo: "RS"
  },
  {
    name: "Ayesha Siddika",
    role: "Marketing Head, FoodPanda Clone",
    content: "Our website was loading in 12 seconds. Syntax Six made it load in 0.7s. Orders increased 380% overnight. Still can’t believe it’s the same site.",
    rating: 5,
    logo: "FP"
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ y: -16, transition: { duration: 0.5 } }}
      className="group relative"
    >
      <div className="relative p-10 rounded-3xl bg-white/8 backdrop-blur-3xl border border-white/30 shadow-2xl hover:bg-white/12 hover:border-white/50 transition-all duration-800">
        
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="absolute -inset-2 bg-white/25 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-800 -z-10" />

        {/* Quote Icon */}
        <Quote className="absolute top-8 right-8 w-12 h-12 text-black/10 group-hover:text-black/20 transition-colors duration-800" />

        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-black text-black" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-8 italic">
          "{testimonial.content}"
        </p>

        {/* Avatar + Info */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-black text-xl shadow-xl">
            {testimonial.logo}
          </div>
          <div>
            <h4 className="text-lg font-black text-black tracking-tight">
              {testimonial.name}
            </h4>
            <p className="text-gray-600 text-sm font-medium">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />
      </div>
    </motion.div>
  );
};

const TestimonialSection = () => {
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
            Clients Love Us
          </h2>
          <div className="mt-10 h-1.5 w-48 bg-black mx-auto" />
          <p className="mt-12 text-2xl md:text-3xl text-gray-700 font-light max-w-5xl mx-auto">
            Real people. Real businesses. Real results in Bangladesh.
          </p>
        </motion.div>

        {/* Testimonial Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
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
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            <span className="font-black text-black text-2xl">2,500+</span> happy clients • 
            <span className="font-black text-black text-2xl"> ৳850 Crore+</span> revenue generated
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;