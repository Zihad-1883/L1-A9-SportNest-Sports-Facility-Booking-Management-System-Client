import BookingForm from "@/app/components/BookingForm";
import FacilitiesDetails from "@/app/components/FacilitiesDetails";
import { fetchFacilities } from "@/lib/facilities/action";
import React from "react";

const FacilitiesDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);
  const facilities = await fetchFacilities();
  //   console.log(facilities);
  const facility = facilities.find((f) => f._id === id);
  // console.log(facility);

  return (
    <div className="container mx-auto">
      <h1>details</h1>
      <div className="grid md:grid-cols-2 items-center">
        <FacilitiesDetails facility={facility}></FacilitiesDetails>
        <BookingForm facility={facility}></BookingForm>
      </div>
    </div>
  );
};

export default FacilitiesDetailsPage;
