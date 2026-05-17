import { Clock, Shield, User } from "lucide-react";
import React from "react";
import WhyChooseUsImage from "../../assets/WhyChooseUs.jpg";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield />,
      title: "Secure Payments",
      desc: "Encrypted transactions for your peace of mind.",
    },
    {
      icon: <Clock />,
      title: "Real-time Slots",
      desc: "No more waiting. Book instantly in seconds.",
    },
    {
      icon: <User />,
      title: "Community Focus",
      desc: "Join matches and find new teammates easily.",
    },
  ];

  return (
    <section className="bg-[#0d0e12] py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-black text-white mb-4">
            Why Choose SportNest?
          </h2>
          <p className="text-gray-400 mb-10">
            We provide a seamless booking experience with modern tech.
          </p>

          <div className="flex flex-col gap-8">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="bg-[#1a1b22] w-12 h-12 rounded-xl flex items-center justify-center text-[#9dff3f] text-xl flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 lg:flex justify-center">
          <Image
            src={WhyChooseUsImage}
            alt="Why choose us"
            className="max-w-lg h-[700px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
