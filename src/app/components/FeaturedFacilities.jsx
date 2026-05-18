import React from "react";
import { fetchFeaturedFacilities } from "@/lib/facilities/action";
import FacilitiesCard from "./FacilitiesCard";

const FeaturedFacilities = async () => {
  const facilities = await fetchFeaturedFacilities();
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
