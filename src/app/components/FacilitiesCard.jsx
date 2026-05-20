import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdPeople, MdBallot } from "react-icons/md";

const FacilitiesCard = ({ facilities }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-15">
      {facilities.length === 0 && (
        <h2 className="text-5xl font-black text-white mb-2 text-center col-span-full">
          No Available<span className="text-[#9dff3f]"> Facilities</span>
        </h2>
      )}
      {facilities.map((facility) => (
        <div
          key={facility._id}
          className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl overflow-hidden flex flex-col"
        >
          <div className="relative">
            <Image
              width={300}
              height={300}
              src={facility.image}
              alt={facility.name}
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#9dff3f] text-[#0d0e12] text-xs font-bold px-3 py-1 rounded-full">
              {facility.facility_type}
            </span>
          </div>
          <div className="p-5 flex flex-col flex-1 gap-3">
            <h3 className="text-white font-bold text-lg">{facility.name}</h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {facility.description}
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="text-[#9dff3f]">
                <MdBallot />
              </span>{" "}
              {facility.location}
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="text-[#9dff3f]">
                <MdPeople />
              </span>{" "}
              Capacity: {facility.capacity} people
            </div>
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#2e3038]">
              <button className="bg-[#9dff3f] text-[#0d0e12] font-bold text-sm px-4 py-2 rounded-xl hover:bg-[#b4ff6a] transition">
                <Link href={`/all-facilities/${facility._id}`}>Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacilitiesCard;
