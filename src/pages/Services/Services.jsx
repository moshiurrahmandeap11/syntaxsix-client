import React, { useState } from 'react';
import { 
  Brain, 
  Cloud, 
  Code, 
  Shield, 
  Database, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { SiBlockchaindotcom, SiDatabricks, SiIota, SiTensorflow } from 'react-icons/si';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that learn and adapt to your business needs",
      features: [
        "Predictive Analytics",
        "Computer Vision",
        "Natural Language Processing",
        "Recommendation Systems"
      ],
      tech: [<SiTensorflow key="tf" />, <Brain key="brain" />],
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for modern applications",
      features: [
        "Cloud Migration",
        "Microservices Architecture",
        "DevOps & CI/CD",
        "Serverless Computing"
      ],
      tech: [<Cloud key="cloud" />, <SiDatabricks key="db" />],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <SiBlockchaindotcom className="w-8 h-8" />,
      title: "Blockchain Development",
      description: "Decentralized solutions for secure and transparent operations",
      features: [
        "Smart Contracts",
        "DApp Development",
        "Tokenization",
        "Web3 Integration"
      ],
      tech: [<SiBlockchaindotcom key="blockchain" />, <Shield key="shield" />],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <SiIota className="w-8 h-8" />,
      title: "IoT Solutions",
      description: "Connected devices and smart systems for real-time insights",
      features: [
        "Sensor Networks",
        "Edge Computing",
        "Real-time Monitoring",
        "Predictive Maintenance"
      ],
      tech: [<SiIota key="iot" />, <Database key="db" />],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored software solutions for unique business challenges",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "System Integration"
      ],
      tech: [<Code key="code" />, <Smartphone key="mobile" />],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Transform raw data into actionable business intelligence",
      features: [
        "Data Pipelines",
        "Big Data Analytics",
        "Data Warehousing",
        "Business Intelligence"
      ],
      tech: [<Database key="data" />, <SiDatabricks key="databricks" />],
      color: "from-rose-500 to-pink-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discover & Analyze",
      description: "We deeply understand your business needs and technical requirements"
    },
    {
      step: "02",
      title: "Design & Plan",
      description: "Create detailed architecture and development roadmap"
    },
    {
      step: "03",
      title: "Develop & Test",
      description: "Agile development with continuous testing and integration"
    },
    {
      step: "04",
      title: "Deploy & Scale",
      description: "Seamless deployment with monitoring and scaling solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      {/* Header */}
      <div className="text-center mb-20 animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-extralight text-black mb-6 tracking-tight">
          Our Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
          Cutting-edge technology solutions tailored to drive your business forward
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-black hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Service Icon */}
              <div className="relative z-10">
                <div className="text-black mb-6">
                  {service.icon}
                </div>
                
                {/* Title & Description */}
                <h3 className="text-2xl font-light text-black mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-light mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-400">
                    {service.tech.map((techIcon, techIdx) => (
                      <div key={techIdx} className="text-xl">
                        {techIcon}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-black group-hover:text-blue-600 transition-colors duration-300">
                    <span className="text-sm font-medium mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6 tracking-tight">
              Our Process
            </h2>
            <p className="text-xl text-gray-500 font-light tracking-wide max-w-2xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connecting Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 bg-white border border-gray-200 rounded-2xl p-8 group-hover:border-black group-hover:shadow-xl transition-all duration-500">
                  <div className="text-4xl font-light text-gray-300 mb-4 group-hover:text-black transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-light text-black mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-black to-gray-800 rounded-3xl p-12 text-white">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Ready to Innovate?
          </h2>
          <p className="text-xl font-light text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-10 py-4 rounded-full font-medium text-black cursor-pointer bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <span className="relative z-10 flex items-center text-sm tracking-wide">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group px-10 py-4 rounded-full font-medium text-white cursor-pointer border border-white transition-all duration-300 hover:bg-white hover:text-black">
              <span className="flex items-center text-sm tracking-wide">
                <span>Schedule Call</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Services;