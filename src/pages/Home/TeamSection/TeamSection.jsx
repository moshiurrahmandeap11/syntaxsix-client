import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const team = [
  {
    name: "Arif Hossain",
    role: "Founder & CEO",
    bio: "Ex-Google & bKash. Built payment systems for 50M+ users. Obsessed with speed and scale.",
    linkedin: "#",
    twitter: "#",
    initial: "AH"
  },
  {
    name: "Nabila Rahman",
    role: "Head of Design",
    bio: "Award-winning UI/UX designer. Work featured in Awwwards. Turns complex ideas into beautiful experiences.",
    linkedin: "#",
    twitter: "#",
    initial: "NR"
  },
  {
    name: "Tanjim Ahmed",
    role: "Lead Developer",
    bio: "Full-stack wizard. 10+ years in React, Node.js & Laravel. Ships production code that never breaks.",
    linkedin: "#",
    twitter: "#",
    initial: "TA"
  },
  {
    name: "Sadia Islam",
    role: "Digital Marketing Director",
    bio: "Managed ৳50 Crore+ ad spend. Grew 200+ Bangladeshi brands to 7-figure revenue.",
    linkedin: "#",
    twitter: "#",
    initial: "SI"
  },
  {
    name: "Rafi Khan",
    role: "Customer Success Lead",
    bio: "Your personal project manager. Ensures every client gets white-glove treatment 24/7.",
    linkedin: "#",
    twitter: "#",
    initial: "RK"
  },
  {
    name: "Fahim Reza",
    role: "Senior Backend Engineer",
    bio: "Built scalable systems for Daraz & Pathao. Handles millions of requests without blinking.",
    linkedin: "#",
    twitter: "#",
    initial: "FR"
  }
];

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -20, transition: { duration: 0.5 } }}
      className="group relative"
    >
      <div className="relative p-8 sm:p-10 rounded-3xl bg-white/8 backdrop-blur-3xl border border-white/30 shadow-2xl hover:bg-white/12 hover:border-white/50 transition-all duration-800">
        
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="absolute -inset-1.5 sm:-inset-2 bg-white/25 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-800 -z-10" />

        {/* Avatar */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-black text-white flex items-center justify-center text-2xl sm:text-3xl font-black shadow-2xl mb-6">
          {member.initial}
        </div>

        {/* Name & Role */}
        <h3 className="text-2xl sm:text-3xl font-black text-black text-center mb-2 tracking-tight">
          {member.name}
        </h3>
        <p className="text-lg sm:text-xl text-gray-600 font-medium text-center mb-6">
          {member.role}
        </p>

        {/* Bio */}
        <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base font-light px-2">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href={member.linkedin}
            className="p-3 rounded-full bg-black/10 backdrop-blur-md border border-white/30 hover:bg-black/20 transition-all duration-500"
          >
            <Linkedin className="w-5 h-5 text-black" />
          </a>
          <a
            href={member.twitter}
            className="p-3 rounded-full bg-black/10 backdrop-blur-md border border-white/30 hover:bg-black/20 transition-all duration-500"
          >
            <Twitter className="w-5 h-5 text-black" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-black/10 backdrop-blur-md border border-white/30 hover:bg-black/20 transition-all duration-500"
          >
            <Globe className="w-5 h-5 text-black" />
          </a>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
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
            Meet The Team
          </h2>
          <div className="mt-6 sm:mt-8 md:mt-10 h-1 w-24 sm:w-32 md:w-48 bg-black mx-auto" />
          <p className="mt-8 sm:mt-10 md:mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
            The people who build empires for Bangladeshi businesses
          </p>
        </motion.div>

        {/* Team Grid - ULTRA RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Join Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20 sm:mt-24 md:mt-32"
        >
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            We’re hiring world-class talent •{" "}
            <a href="#careers" className="font-black text-black underline underline-offset-4">
              Join Syntax Six
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;