import BookingForm from "@/app/components/BookingForm";
import FacilitiesDetails from "@/app/components/FacilitiesDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const FacilitiesDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/all-facilities/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const facility = await res.json();

  // console.log(facilities);
  // const facility = facilities.find((f) => f._id === id);
  // console.log(facility);

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 items-center">
        <FacilitiesDetails facility={facility}></FacilitiesDetails>
        <BookingForm facility={facility}></BookingForm>
      </div>
    </div>
  );
};

export default FacilitiesDetailsPage;
