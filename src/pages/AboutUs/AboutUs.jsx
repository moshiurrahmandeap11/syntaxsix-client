import React, { useState, useEffect } from "react";
import MemberCard from "../../components/sharedItems/MemberCard/MemberCard";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: 1,
      name: "Moshiur Rahman",
      image: "https://i.ibb.co.com/tpFy0xCS/image.jpg",
      role: "Full Stack Developer",
    },
    {
      id: 2,
      name: "Afsana Ahmed",
      image: "https://i.ibb.co.com/sJC6dZh8/pexels-olly-3756681.jpg",
      role: "UI/UX Designer",
    },
    {
      id: 3,
      name: "Rakib Hasan",
      image: "https://i.ibb.co.com/PvYGkMQZ/image-4.png",
      role: "DevOps Engineer",
    },
    {
      id: 4,
      name: "Tania Islam",
      image: "https://i.ibb.co.com/sJC6dZh8/pexels-olly-3756681.jpg",
      role: "Project Manager",
    },
    {
      id: 5,
      name: "Naimul Karim",
      image: "https://i.ibb.co.com/zH03z3Mj/mysterious-mafia-man-smoking-cigarette-52683-34828.jpg",
      role: "AI Engineer",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const handleTeamClick = () => {
    navigate("/syntax-six-team")
  };

  const handleContactClick = () => {
    console.log("Navigate to contact section");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative">
          {/* Left Side */}
          <div className="space-y-6 relative z-20">
            <div className="inline-block px-5 py-2 bg-black/5 rounded-full mb-2">
              <span className="text-xs font-semibold text-black uppercase tracking-widest">
                About Us
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-black">
              Syntax Six
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We are a team of passionate innovators dedicated to building
              cutting-edge technology solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a vision to push the boundaries of what's possible,
              Syntax Six brings together expertise in AI, ML, and Cloud tech.
            </p>
          </div>

          {/* Right Side - One member at a time */}
          <div className="hidden lg:flex relative h-[500px] items-center justify-center overflow-visible">
            <div
              key={teamMembers[currentIndex].id}
              className="absolute animate-dropCard"
            >
              <MemberCard
                name={teamMembers[currentIndex].name}
                role={teamMembers[currentIndex].role}
                image={teamMembers[currentIndex].image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Button */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={handleTeamClick}
            className="group px-14 py-5 bg-black text-white rounded-full font-semibold text-base transition-all duration-400 hover:scale-105 hover:shadow-2xl"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              letterSpacing: "0.02em",
            }}
          >
            <span className="flex items-center justify-center">
              Meet Our Team
              <svg
                className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-28 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2
              className="text-5xl md:text-7xl font-bold text-black mb-8"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                letterSpacing: "-0.04em",
              }}
            >
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-10"></div>
            <p
              className="text-2xl md:text-3xl text-gray-800 leading-relaxed max-w-4xl mx-auto"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                fontWeight: "500",
                lineHeight: "1.5",
              }}
            >
              To empower businesses and individuals with innovative technology
              solutions that drive growth, efficiency, and digital
              transformation in an ever-evolving world.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2
              className="text-5xl md:text-7xl font-bold text-black mb-8"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                letterSpacing: "-0.04em",
              }}
            >
              Our Vision
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-10"></div>
            <p
              className="text-2xl md:text-3xl text-gray-800 leading-relaxed max-w-4xl mx-auto"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                fontWeight: "500",
                lineHeight: "1.5",
              }}
            >
              To become a global leader in technological innovation, creating
              solutions that shape the future and make a lasting positive impact
              on society.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-28 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-7xl font-bold text-black mb-8"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                letterSpacing: "-0.04em",
              }}
            >
              Our Story
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
          <div
            className="space-y-8 text-lg md:text-xl text-gray-700 leading-loose"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              fontWeight: "400",
              lineHeight: "1.8",
            }}
          >
            <p>
              It all started in a small garage with six passionate developers
              who shared a common dream: to create technology that matters.
              Armed with laptops, endless cups of coffee, and an unwavering
              belief in innovation, we embarked on our journey.
            </p>
            <p>
              The early days were challenging. We worked late nights, debugged
              countless lines of code, and learned from every failure. But with
              each challenge, our resolve grew stronger. We knew we were
              building something special.
            </p>
            <p>
              Today, Syntax Six has grown from those humble beginnings into a
              dynamic team of innovators, designers, and developers. We've
              helped dozens of clients transform their businesses, launched
              cutting-edge products, and built a community of tech enthusiasts
              who share our vision.
            </p>
            <p
              className="text-2xl font-semibold text-black pt-6"
              style={{
                letterSpacing: "-0.02em",
              }}
            >
              But our story is just beginning. Join us as we continue to push
              boundaries and shape the future.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              letterSpacing: "-0.04em",
            }}
          >
            Ready to Work Together?
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-300 mb-12"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              fontWeight: "400",
            }}
          >
            If you wish to contact us, we'd love to hear from you.
          </p>
          <button
            onClick={handleContactClick}
            className="group px-14 py-5 bg-white text-black rounded-full font-semibold text-base transition-all duration-400 hover:scale-105 hover:shadow-2xl"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              letterSpacing: "0.02em",
            }}
          >
            <span className="flex items-center justify-center">
              Contact Us
              <svg
                className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes dropToPlace {
          0% {
            transform: translateX(50%) translateY(-200px) rotate(-10deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translateX(50%) translateY(50px) rotate(5deg);
          }
          60% {
            transform: translateX(50%) translateY(150px) rotate(0deg);
          }
          100% {
            transform: translateX(50%) translateY(200px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
