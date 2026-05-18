import FacilitiesDetails from "@/app/components/FacilitiesDetails";
import { fetchFacilities } from "@/lib/facilities/data";
import React from "react";


const FacilitiesDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const facilities = await fetchFacilities();
  //   console.log(facilities);
  const facility = facilities.find((f) => f._id === id);
  // console.log(facility);

  return (
    <div className="container mx-auto">
      <h1>details</h1>
      <FacilitiesDetails facility={facility}></FacilitiesDetails>
    </div>
  );
};

export default FacilitiesDetailsPage;
