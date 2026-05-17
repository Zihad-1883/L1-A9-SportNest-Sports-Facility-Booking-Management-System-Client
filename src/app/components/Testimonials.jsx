import React from "react";
import Testimonials1 from "../../assets/Testimonials-1.jpg";
import Testimonials2 from "../../assets/Testimonials-2.jpg";
import Testimonials3 from "../../assets/Testimonials-3.jpg";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5.0,
      text: "SportNest made it so easy to find a turf near me. The booking process is super smooth!",
      name: "Alex Johnson",
      role: "Footballer",
      img: Testimonials1,
    },
    {
      rating: 5.0,
      text: "SportNest made it so easy to find a turf near me. The booking process is super smooth!",
      name: "Mike Chen",
      role: "Tennis Coach",
      img: Testimonials2,
    },
    {
      rating: 5.0,
      text: "SportNest made it so easy to find a turf near me. The booking process is super smooth!",
      name: "John Doe",
      role: "Badminton Player",
      img: Testimonials3,
    },
  ];
  return (
    <section className="bg-[#0d0e12] py-20 my-10">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white">
            What <span className="text-[#9dff3f]">Players Say</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Hear from our active sporting community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl p-6 flex flex-col gap-4"
            >
              <p className="text-[#9dff3f] font-bold">⭐ ({t.rating})</p>
              <p className="text-gray-300 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={20}
                  height={20}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
