import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Phone, Mail, MessageCircle, Star, Zap, Shield, Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Main CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden shadow-2xl shadow-gray-900/30"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>

          {/* Content */}
          <div className="relative px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
              <span className="text-sm font-semibold">Trusted by 2,500+ Businesses</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Ready to <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Dominate</span> Your Market?
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed opacity-90"
            >
              Join thousands of successful businesses that transformed their digital presence with Syntax Six. Your success story starts here.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap justify-center gap-6 text-sm sm:text-base"
            >
              {[
                { icon: Zap, text: "Lightning Fast Setup" },
                { icon: Shield, text: "Enterprise Security" },
                { icon: Clock, text: "24/7 Expert Support" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Primary Button */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-white text-gray-900 font-bold text-lg sm:text-xl shadow-2xl shadow-gray-900/25 hover:shadow-3xl hover:shadow-gray-900/40 transform hover:scale-105 transition-all duration-300"
              >
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                Launch Your Project
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Secondary Button */}
              <a
                href="tel:+8801888888888"
                className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-lg sm:text-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                Call Now: 01888-888888
              </a>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10"
            >
              <p className="text-base sm:text-lg opacity-90 font-medium">
                <span className="font-bold">Free Strategy Session</span> • No Credit Card Required • 
                <span className="font-bold"> 4-Minute Response Time</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email Us",
              desc: "hello@syntaxsix.com",
              link: "mailto:hello@syntaxsix.com"
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: "24/7 Support",
              desc: "01888-888888",
              link: "tel:+8801888888888"
            },
            {
              icon: <MessageCircle className="w-6 h-6" />,
              title: "Live Chat",
              desc: "Instant Response",
              link: "#chat"
            }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group block p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex p-4 rounded-xl bg-gray-900 text-white mb-4 group-hover:scale-110 group-hover:bg-black transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 font-medium">{item.desc}</p>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default CTASection;