"use client";
import { FaCalendarAlt } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { BookingCancelAlert } from "./BookingCancelAlert";
import Image from "next/image";

const MyBookingsPage = ({ bookings }) => {
  //   console.log(bookings._id);
  // console.log(bookings);

  return (
    <div className="bg-[#0d0e12] min-h-screen py-16 px-6">
      <div className="container mx-auto">
        {bookings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No bookings found.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-5 flex-1">
                  <div className="hidden sm:block">
                    <Image
                      src={booking.bookedFacilityImage}
                      alt={booking.name}
                      width={160}
                      height={160}
                      className="w-full h-20 object-cover rounded-2xl"
                    ></Image>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-white font-bold text-lg mb-3">
                      {booking.bookedFacilityName}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="text-[#9dff3f]">
                          <FaCalendarAlt />
                        </span>
                        {new Date(booking.bookedDate).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="text-[#9dff3f]">
                          <FaClock />
                        </span>
                        {booking.bookedTimeSlot}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="text-[#9dff3f]">
                          <CiTimer />
                        </span>
                        {booking.bookedHours} hour(s)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-3">
                  <div>
                    <span className="text-[#9dff3f] font-bold text-xl">
                      ৳{booking.bookedTotalPrice}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full w-fit "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"`}
                  >
                    Pending
                  </span>

                  <BookingCancelAlert bookingId={booking._id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;
