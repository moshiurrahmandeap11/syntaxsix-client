import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, ArrowRight, Users, Shield, Zap } from 'lucide-react';

const NewsLetterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Main Container */}
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
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 mb-8"
            >
              <Mail className="w-12 h-12 sm:w-14 sm:h-14" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Stay Ahead of the{' '}
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Digital Curve
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed opacity-90"
            >
              Get weekly insights on digital marketing, web development, and business growth strategies - 
              delivered straight to your inbox.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-wrap justify-center gap-6 text-sm sm:text-base"
            >
              {[
                { icon: Zap, text: "Latest Industry Trends" },
                { icon: Shield, text: "Expert Insights" },
                { icon: Users, text: "Success Strategies" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              onSubmit={handleSubmit}
              className="mt-12 max-w-2xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 text-base sm:text-lg focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-white text-gray-900 font-bold text-base sm:text-lg shadow-2xl shadow-gray-900/25 hover:shadow-3xl hover:shadow-gray-900/40 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300"
                >
                  {status === 'loading' && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  )}
                  {status === 'success' && <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {status === 'idle' && (
                    <>
                      Subscribe Now
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                  {status === 'loading' && 'Subscribing...'}
                  {status === 'success' && 'Subscribed!'}
                </button>
              </div>

              {/* Success Message */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-green-300 font-medium text-base"
                >
                  Thank you! Check your inbox for confirmation.
                </motion.p>
              )}
            </motion.form>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base opacity-80"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>12,000+ Entrepreneurs Read Our Newsletter</span>
              </div>
              <div className="hidden sm:block">•</div>
              <span>No Spam • Unsubscribe Anytime</span>
            </motion.div>
          </div>
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

export default NewsLetterSection;