"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Award } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Founded", value: "2024" },
  { label: "Partner Facilities", value: "500+" },
  { label: "Active Athletes", value: "10,000+" },
  { label: "Cities covered", value: "12+" },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Our Mission",
    desc: "To democratize access to sports facilities by making booking as easy as ordering food.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality First",
    desc: "We only partner with top-tier facilities that maintain international standards.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Innovation",
    desc: "Using cutting-edge tech to solve real problems for sports enthusiasts.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-[#0d0e12] min-h-screen text-white pb-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-[#1e2029]">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#9dff3f]/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              We&apos;re changing how the world <span className="text-[#9dff3f]">Plays.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              SportNest was born out of a simple frustration: it shouldn&apos;t be hard to find a place to play. We&apos;ve built a bridge between athletes and facility owners to create a vibrant sports ecosystem.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-[#9dff3f]">{stat.value}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0a0b0f]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-[#1a1b22] border border-[#2e3038] rounded-3xl"
              >
                <div className="w-12 h-12 bg-[#9dff3f]/10 text-[#9dff3f] rounded-2xl flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center h-full flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-2xl bg-gradient-to-br from-[#1a1b22] to-[#0d0e12] border border-[#2e3038] p-12 rounded-[2rem]"
            >
                <Users className="w-12 h-12 text-[#9dff3f] mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Community</h2>
                <p className="text-gray-400 mb-10">
                    Whether you&apos;re a facility owner looking to grow your business or an athlete seeking the best courts, SportNest is for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-[#9dff3f] text-[#0d0e12] font-black rounded-2xl hover:bg-[#b4ff6a] transition">
                        Partner With Us
                    </button>
                    <button className="px-8 py-4 border border-[#2e3038] text-white font-bold rounded-2xl hover:bg-[#1a1b22] transition">
                        Contact Support
                    </button>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
}
