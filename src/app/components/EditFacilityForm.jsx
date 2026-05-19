import React, { useState } from "react";
import { Button } from "@heroui/react";
import { MapPin, Users, Clock, FileText } from "lucide-react";
import { MdEmail, MdSportsSoccer } from "react-icons/md";
import { FaCamera, FaNoteSticky, FaBangladeshiTakaSign } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddFacilityForm = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const facilityTypes = [
    "Football",
    "Badminton",
    "Swimming",
    "Tennis",
    "Gym",
    "Cricket",
    "Basketball",
    "Squash",
  ];
  const availableSlots = [
    "06:00 AM - 08:00 AM",
    "08:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 02:00 PM",
    "02:00 PM - 04:00 PM",
    "04:00 PM - 06:00 PM",
    "06:00 PM - 08:00 PM",
    "08:00 PM - 10:00 PM",
  ];
  const [selectedSlots, setSelectedSlots] = useState([]);
  // console.log(selectedSlots);

  const handleMultipleSlots = (slot) => {
    // console.log(slot);
    setSelectedSlots((old) => {
      console.log(old);
      if (old.includes(slot)) {
        return old.filter((s) => s !== slot);
      } else {
        return [...old, slot];
      }
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newFacility = {
      name: formData.get("name"),
      facility_type: formData.get("facility_type"),
      image: formData.get("image"),
      location: formData.get("location"),
      price_per_hour: parseInt(formData.get("price_per_hour")),
      capacity: parseInt(formData.get("capacity")),
      available_slots: selectedSlots,
      description: formData.get("description"),
      owner_email: user?.email,
    };
    if (selectedSlots.length === 0) {
      toast.error("Please Select A Time Slot");
    }
    // console.log(newFacility);

    const res = await fetch("http://localhost:8080/added-facilities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFacility),
    });
    const data = await res.json();
    // console.log(data);
    toast.success("Facility Added Successfully");
    router.push("/all-facilities");
  };

  return (
    <div className="my-20 bg-[#0d0e12] flex items-center justify-center px-4">
      <div className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl p-8 w-full max-w-lg">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-white">
            Add <span className="text-[#9dff3f]">Facility</span>
          </h2>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <FileText size={16} className="text-[#9dff3f]" /> Facility Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Green Turf Football Arena"
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <MdSportsSoccer size={16} className="text-[#9dff3f]" /> Facility
              Type
            </label>
            <select
              name="facility_type"
              required
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition cursor-pointer"
            >
              <option value="">Select type</option>
              {facilityTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium">
              <div className="flex items-center gap-2">
                <FaCamera size={16} className="text-[#9dff3f]" /> Facility Image
              </div>
            </label>
            <input
              type="url"
              name="image"
              required
              placeholder="Add image url here"
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-gray-400 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition cursor-pointer file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-[#9dff3f] file:text-[#0d0e12] file:text-xs file:font-bold"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <MapPin size={16} className="text-[#9dff3f]" /> Location
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="e.g. Dhanmondi, Dhaka"
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                <FaBangladeshiTakaSign size={16} className="text-[#9dff3f]" />{" "}
                Price/Hour (in Taka)
              </label>
              <input
                type="number"
                name="price_per_hour"
                required
                min={1}
                placeholder="1200"
                className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                <Users size={16} className="text-[#9dff3f]" /> Capacity
              </label>
              <input
                type="number"
                name="capacity"
                required
                min={1}
                placeholder="22"
                className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <Clock size={16} className="text-[#9dff3f]" />
              Select Time Slots (Multiple selection allowed)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {availableSlots.map((slot) => (
                <label
                  key={slot}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer
                    ${
                      selectedSlots.includes(slot)
                        ? "bg-[#9dff3f]/10 border-[#9dff3f]"
                        : "bg-[#0d0e12] border-[#2e3038] hover:border-gray-500"
                    }`}
                >
                  <input
                    type="checkbox"
                    onChange={() => handleMultipleSlots(slot)}
                    className="w-4 h-4 rounded border-[#2e3038] bg-[#9dff3f]"
                  />
                  <span
                    className={`text-sm ${selectedSlots.includes(slot) ? "text-[#9dff3f]" : "text-gray-300"}`}
                  >
                    {slot}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium">
              <div className="flex items-center gap-2">
                <FaNoteSticky size={16} className="text-[#9dff3f]" />{" "}
                Description
              </div>
            </label>
            <textarea
              name="description"
              required
              rows={4}
              placeholder="Describe your facility..."
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium">
              <div className="flex items-center gap-2">
                <MdEmail size={16} className="text-[#9dff3f]" /> Owner Email
              </div>
            </label>
            <input
              type="email"
              name="owner_email"
              value={user?.email || ""}
              disabled
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-gray-500 rounded-xl px-4 py-3 text-sm outline-none transition"
            />
          </div>

          <Button
            type="submit"
            className="bg-[#9dff3f] text-[#0d0e12] font-bold rounded-xl hover:bg-[#b4ff6a] w-full mt-2"
          >
            Add Facility
          </Button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#2e3038]" />
          <span className="text-gray-500 text-sm">Your Listing</span>
          <div className="flex-1 h-px bg-[#2e3038]" />
        </div>

        <p className="text-center text-gray-500 text-xs">
          By adding a facility, you agree to our{" "}
          <button className="text-[#9dff3f] hover:underline">
            listing policy
          </button>
        </p>
      </div>
    </div>
  );
};

export default AddFacilityForm;
