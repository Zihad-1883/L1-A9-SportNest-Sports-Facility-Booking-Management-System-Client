"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, CalendarCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Find Facility",
    desc: "Search and filter through our curated list of premium sports venues.",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Book a Slot",
    desc: "Choose your preferred time and date with real-time availability.",
    color: "from-[#9dff3f]/20 to-[#9dff3f]/5",
    iconColor: "text-[#9dff3f]",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Play Your Game",
    desc: "Receive instant confirmation and get ready to elevate your performance.",
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-400",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0d0e12] py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9dff3f]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            How it <span className="text-[#9dff3f]">Works</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Experience the most seamless sports booking journey in just three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`h-full bg-gradient-to-br ${step.color} border border-[#1e2029] rounded-3xl p-8 transition-all duration-300 group-hover:border-[#9dff3f]/30 group-hover:-translate-y-2`}>
                <div className={`w-16 h-16 rounded-2xl bg-[#0d0e12] border border-[#1e2029] flex items-center justify-center mb-6 ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                
                {/* Connector for desktop */}
                {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-8 h-px bg-gradient-to-r from-[#1e2029] to-transparent" />
                    </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
