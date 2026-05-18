import React from "react";
import { Clock, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const FacilitiesDetails = ({ facility }) => {
  return (
    <div className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl overflow-hidden">
      <div className="relative h-120 w-full">
        <Image
          src={facility.image}
          alt={facility.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 left-3 bg-[#9dff3f] text-[#0d0e12] px-3 py-1 rounded-full text-sm font-bold">
          {facility.facility_type}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white mb-1">{facility.name}</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-[#9dff3f] fill-[#9dff3f]" />
              <span className="text-white text-sm font-medium">4.9</span>
            </div>
            <span className="text-gray-400 text-sm">(120 reviews)</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
          <MapPin size={14} />
          <span>{facility.location}</span>
        </div>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {facility.description}
        </p>
        <div className="space-y-1 mb-4">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Users size={14} className="text-[#9dff3f]" />
            <span>Capacity: {facility.capacity}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <FaBangladeshiTakaSign size={14} className="text-[#9dff3f]" />
            <span>৳{facility.price_per_hour}/hour</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={14} className="text-[#9dff3f]" />
            <span className="text-white text-sm font-medium">
              Available Slots
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {facility.available_slots.map((slot, index) => (
              <span
                key={index}
                className="bg-[#0d0e12] border border-[#2e3038] text-gray-300 text-xs px-2 py-1 rounded-lg"
              >
                {slot}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesDetails;
