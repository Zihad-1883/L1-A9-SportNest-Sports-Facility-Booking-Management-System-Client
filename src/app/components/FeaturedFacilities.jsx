import React from "react";
import FacilitiesCard from "./FacilitiesCard";

const FeaturedFacilities = async () => {
  let facilities = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/features`, {
      cache: "no-store",
    });
    if (res.ok) {
      facilities = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch featured facilities:", err.message);
  }
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <h2 className="text-center text-5xl font-black text-white mb-5">
          Our Featured <span className="text-[#9dff3f]">Facilities</span>
        </h2>
      </div>

      <FacilitiesCard facilities={facilities}></FacilitiesCard>
    </div>
  );
};

export default FeaturedFacilities;
