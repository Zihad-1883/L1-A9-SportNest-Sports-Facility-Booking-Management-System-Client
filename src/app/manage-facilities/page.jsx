import React from "react";
import Image from "next/image";
import { MdBallot, MdPeople } from "react-icons/md";
import Link from "next/link";
import { FacilityDeleteAlert } from "../components/FacilityDeleteAlert";
import EditFacilityForm from "../components/EditFacilityForm";

const ManageFacilitiesPage = async () => {
  const res = await fetch("http://localhost:8080/added-facilities");
  const bookings = await res.json();
  // console.log(bookings);
  return (
    <div className="bg-[#0d0e12] min-h-screen py-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <h2 className="text-4xl font-black text-white mb-2">
              Manage My <span className="text-[#9dff3f]">Facilities</span>
            </h2>
            <p className="text-gray-400 text-sm mb-10">
              Manage and track the facilities you&apos;ve added. You can create
              , edit and delete your own facilities here.
            </p>
          </div>
          <div>
            <button className="bg-[#9dff3f] text-[#0d0e12] font-bold text-sm px-4 py-2 rounded-xl hover:bg-[#b4ff6a] transition">
              <Link href={`/add-facility`}>Create New Facility</Link>
            </button>
          </div>
        </div>
        <div className="container mx-auto">
          {bookings.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No facilities found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-15">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="relative">
                    <Image
                      width={300}
                      height={300}
                      src={booking.image}
                      alt={booking.name}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-[#9dff3f] text-[#0d0e12] text-xs font-bold px-3 py-1 rounded-full">
                      {booking.facility_type}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <h3 className="text-white font-bold text-lg">
                      {booking.name}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {booking.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="text-[#9dff3f]">
                        <MdBallot />
                      </span>{" "}
                      {booking.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="text-[#9dff3f]">
                        <MdPeople />
                      </span>{" "}
                      Capacity: {booking.capacity} people
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#2e3038]">
                      <EditFacilityForm facility={booking}/>
                      <FacilityDeleteAlert bookingId={booking._id} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageFacilitiesPage;
