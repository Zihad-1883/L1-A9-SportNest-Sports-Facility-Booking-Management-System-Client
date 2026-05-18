import React from "react";
import { fetchFacilities } from "@/lib/facilities/data";
import FacilitiesCard from "../components/FacilitiesCard";

const AllFacilitiesPage = async () => {
  const facilities = await fetchFacilities();
  // console.log(facilities);

  return (
    <div className="container mx-auto">
      <div className="my-10">
        <h2 className="text-5xl font-black text-white mb-2">
          Discover <span className="text-[#9dff3f]">Facilities</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Find the perfect spot for your favorite sport.
        </p>
      </div>
      <FacilitiesCard facilities={facilities}></FacilitiesCard>
    </div>
  );
};

export default AllFacilitiesPage;
