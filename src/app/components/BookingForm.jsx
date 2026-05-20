"use client";

import { Button } from "@heroui/react";
import { Clock, MapPin, Timer } from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const BookingForm = ({ facility }) => {
  const router = useRouter();
  // console.log(facility);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);
  const [totalPrice, setTotalPrice] = useState("0");
  const [bookingDate, setBookingDate] = useState(null);
  // console.log(new Date(bookingDate));

  const handleBooking = async (e) => {
    e.preventDefault();
    const bookingData = {
      userID: user.id,
      userName: user.name,
      userEmail: user.email,
      userImage: user.image,
      bookedFacilityName: facility.name,
      bookedFacilityID: facility._id,
      bookedTimeSlot: e.target.timeSlot.value,
      bookedHours: e.target.hours.value,
      bookedTotalPrice: totalPrice,
      bookedDate: new Date(bookingDate),
      bookedFacilityImage: facility.image,
    };
    // console.log(bookingData);

    const { data: tokenData } = await authClient.token();
    console.log(tokenData);

    const res = await fetch(`http://localhost:8080/my-bookings`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    // console.log(data);
    if (res.status === 409) {
      toast.error(data.error);
    } else {
      toast.success("Facility Booked Successfully");
      router.push("/my-bookings");
    }
  };

  const handleTotalPrice = (e) => {
    const totalHour = e.target.value;
    // console.log("total hour", totalHour);
    setTotalPrice(totalHour * facility.price_per_hour);
    // console.log("total price", totalPrice);
  };

  return (
    <div className="my-20 bg-[#0d0e12] flex items-center justify-center px-4">
      <div className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl p-8 w-full max-w-lg">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-white">
            Book <span className="text-[#9dff3f]">Facility</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Reserve your spot and start playing today.
          </p>
        </div>

        <form onSubmit={handleBooking} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <MapPin size={16} className="text-[#9dff3f]" />
              Facility Name
            </label>
            <input
              type="text"
              name="facilityName"
              value={facility.name}
              required
              disabled
              placeholder="Select facility"
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <FaCalendarAlt className="text-[#9dff3f]" /> Booking Date
            </label>
            <input
              type="date"
              name="date"
              required
              onChange={(e) => setBookingDate(e.target.value)}
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition cursor-pointer [color-scheme:dark]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <Clock size={16} className="text-[#9dff3f]" />
              Time Slot
            </label>
            <select
              name="timeSlot"
              required
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition cursor-pointer"
            >
              <option value="">Select time slot</option>
              {facility.available_slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <Timer size={16} className="text-[#9dff3f]" />
              Number of Hours
            </label>
            <div className="flex items-center gap-3">
              <input
                onChange={handleTotalPrice}
                type="number"
                name="hours"
                required
                min={1}
                max={2}
                step={1}
                className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
              />
              <div className="bg-[#0d0e12] border border-[#2e3038] rounded-xl px-4 py-3 text-white text-sm whitespace-nowrap">
                hour(s)
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <FaBangladeshiTakaSign size={16} className="text-[#9dff3f]" />
              Total Price
            </label>
            <div className="bg-[#0d0e12] border border-[#9dff3f] rounded-xl px-4 py-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm"></span>
                <span className="text-white font-bold text-xl">
                  ৳{totalPrice}
                </span>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="bg-[#9dff3f] text-[#0d0e12] font-bold rounded-xl hover:bg-[#b4ff6a] w-full mt-2"
          >
            Confirm Booking
          </Button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#2e3038]" />
          <span className="text-gray-500 text-sm">Secure Booking</span>
          <div className="flex-1 h-px bg-[#2e3038]" />
        </div>

        <p className="text-center text-gray-500 text-xs">
          By confirming, you agree to our{" "}
          <button className="text-[#9dff3f] hover:underline">
            cancellation policy
          </button>
        </p>
      </div>
    </div>
  );
};

export default BookingForm;
