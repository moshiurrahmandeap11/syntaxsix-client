import React, { useState, useEffect } from 'react';
import { Brain, Cloud } from 'lucide-react';
import { SiBlockchaindotcom, SiDatabricks, SiIota, SiTensorflow } from 'react-icons/si';

const techStack = [
  { name: 'AI', icon: <Brain />, delay: '0s' },
  { name: 'ML', icon: <SiTensorflow />, delay: '0.1s' },
  { name: 'DS', icon: <SiDatabricks />, delay: '0.2s' },
  { name: 'Cloud', icon: <Cloud />, delay: '0.3s' },
  { name: 'IoT', icon: <SiIota />, delay: '0.4s' },
  { name: 'Blockchain', icon: <SiBlockchaindotcom />, delay: '0.5s' },
];

const Banner = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const texts = ["Hello", "This is Syntax Six"];

  // Typing Effect
  useEffect(() => {
    if (currentText >= texts.length) {
      setShowLoader(true);
      setTimeout(() => setShowContent(true), 700);
      return;
    }

    const text = texts[currentText];
    let charIndex = 0;

    if (isTyping) {
      const typeInterval = setInterval(() => {
        if (charIndex <= text.length) {
          setDisplayText(text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsTyping(false), 800);
        }
      }, 120);
      return () => clearInterval(typeInterval);
    } else {
      const eraseInterval = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayText(text.slice(0, text.length - charIndex));
          charIndex++;
        } else {
          clearInterval(eraseInterval);
          setCurrentText(prev => prev + 1);
          setIsTyping(true);
        }
      }, 60);
      return () => clearInterval(eraseInterval);
    }
  }, [currentText, isTyping]);

  // Card tilt state
  const [mousePos, setMousePos] = useState({});

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">


      <div className="relative z-10 w-full max-w-7xl px-4">
        {/* Typing Loader */}
        {!showLoader && (
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-black mb-4 min-h-[100px]">
              {displayText}<span className="animate-pulse">|</span>
            </h1>
          </div>
        )}

        {/* Loader spinning tech icons */}
        {showLoader && !showContent && (
          <div className="flex justify-center items-center gap-6">
            {techStack.map((tech, i) => (
              <div key={i} className="text-4xl animate-spin-slow">{tech.icon}</div>
            ))}
          </div>
        )}

        {/* Main Content */}
        {showContent && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left - Fluid S with bubbles */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 flex items-center justify-center">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-black/10 animate-bubble"
                    style={{
                      width: Math.random() * 60 + 20 + 'px',
                      height: Math.random() * 60 + 20 + 'px',
                      left: '50%',
                      top: '50%',
                      animationDelay: i * 0.3 + 's',
                      animationDuration: Math.random() * 3 + 2 + 's'
                    }}
                  />
                ))}
                <div className="relative z-10">
                  <svg className="w-56 h-56 animate-fluid-float" viewBox="0 0 200 200" fill="none">
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fill="black"
                      fontSize="140"
                      fontWeight="300"
                      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                      className="animate-morph"
                    >
                      S
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Center - Text + CTA */}
            <div className="text-center animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-extralight text-black mb-6 tracking-tight">
                Syntax Six
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 font-light tracking-wide">
                Innovating the Future
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <button className="group px-10 py-4 rounded-full font-medium text-white cursor-pointer bg-black transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden">
                  <span className="relative z-10 flex items-center text-sm tracking-wide">
                    <span>Explore More</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Right - Interactive Tech Cards */}
            <div className="flex justify-center lg:justify-start">
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = (e.clientX - rect.left - rect.width / 2) / 10;
                      const y = (e.clientY - rect.top - rect.height / 2) / 10;
                      setMousePos({ x, y });
                    }}
                    style={{
                      transform: `rotateY(${mousePos.x || 0}deg) rotateX(${-mousePos.y || 0}deg)`,
                      animation: `slideIn 0.5s ease-out ${tech.delay} both`
                    }}
                  >
                    <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-black hover:shadow-2xl transition-all duration-500">
                      <div className="text-4xl mb-3">{tech.icon}</div>
                      <p className="text-xs font-medium text-black tracking-wider uppercase">{tech.name}</p>
                      <div className="absolute inset-0 bg-linear-to-br from-black/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes fluid-float {
          0%,100%{transform:translateY(0px) scale(1);filter:blur(0px);}
          50%{transform:translateY(-15px) scale(1.02);filter:blur(0.5px);}
        }
        @keyframes bubble {
          0%{transform:scale(0);opacity:0.3;}
          50%{opacity:0.15;}
          100%{transform:scale(1.5);opacity:0;}
        }
        @keyframes slideIn {
          from { opacity:0; transform:translateX(30px);}
          to { opacity:1; transform:translateX(0);}
        }
        @keyframes fade-in { from{opacity:0;transform:scale(0.95);} to{opacity:1;transform:scale(1);} }
        @keyframes morph {0%,100%{transform:scale(1);} 50%{transform:scale(1.05);}}
        .animate-fluid-float { animation: fluid-float 4s ease-in-out infinite; }
        .animate-bubble { animation: bubble infinite ease-out; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-morph { animation: morph 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 3s linear infinite; }
      `}</style>
    </div>
  );
};

export default Banner;
