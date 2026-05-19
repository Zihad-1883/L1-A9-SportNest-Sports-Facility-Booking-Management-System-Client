"use client";

import React from "react";
import AddFacilityForm from "../components/AddFacilityForm";

const AddFacilityPage = () => {
  
  return (
    <div className="container mx-auto">
      <h2 className="text-5xl font-black text-white mt-4">
        Add New <span className="text-[#9dff3f]">Facilities</span>
      </h2>
      <p className="text-xl text-gray-400 mb-10 mt-2">
        List your sports facility and start accepting bookings.
      </p>
      <AddFacilityForm></AddFacilityForm>
    </div>
  );
};

export default AddFacilityPage;
