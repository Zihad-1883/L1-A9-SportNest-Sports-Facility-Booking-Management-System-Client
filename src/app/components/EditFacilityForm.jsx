"use client";

import React, { useState } from "react";
import { Button, Modal } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { MdEmail, MdSportsSoccer } from "react-icons/md";
import { FaBangladeshiTakaSign, FaCamera, FaNoteSticky } from "react-icons/fa6";
import { Clock, FileText, MapPin, Users } from "lucide-react";

const EditFacilityForm = ({ facility }) => {
  // console.log(facility);
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
      // console.log(old);
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
    const editedFacility = {
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
      return;
    }
    // console.log(editedFacility);

    const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `http://localhost:8080/all-facilities/${facility._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(editedFacility),
      },
    );
    const data = await res.json();
    // console.log(data);
    if (res.status === 409) {
      toast.error(data.error);
      return;
    } else {
      toast.success("Facility Edited Successfully");
      window.location.reload();
    }
  };

  return (
    <Modal>
      <Button className="bg-[#9dff3f] text-[#0d0e12] font-bold text-sm px-4 py-2 rounded-xl hover:bg-[#b4ff6a] transition">
        Edit Facility
      </Button>
      <Modal.Backdrop className="bg-black/60 backdrop-blur-sm">
        <Modal.Container placement="auto">
          <Modal.Dialog className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl w-full max-w-lg mx-4">
            <Modal.CloseTrigger className="text-gray-500 hover:text-white transition absolute top-4 right-4" />

            <Modal.Header className="p-8 pb-0">
              <Modal.Heading className="text-3xl font-black text-white">
                Edit <span className="text-[#9dff3f]">Facility</span>
              </Modal.Heading>
              <p className="text-gray-400 mt-2 text-sm">
                Update your facility details below.
              </p>
            </Modal.Header>

            <Modal.Body className="p-8 pt-6 max-h-[70vh] overflow-y-auto">
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <FileText size={16} className="text-[#9dff3f]" /> Facility
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    defaultValue={facility.name}
                    className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <MdSportsSoccer size={16} className="text-[#9dff3f]" />{" "}
                    Facility Type
                  </label>
                  <select
                    name="facility_type"
                    required
                    defaultValue={facility.facility_type}
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
                  <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <FaCamera size={16} className="text-[#9dff3f]" /> Facility
                    Image
                  </label>
                  <input
                    type="url"
                    name="image"
                    required
                    defaultValue={facility.image}
                    className="w-full bg-[#0d0e12] border border-[#2e3038] text-gray-400 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
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
                    defaultValue={facility.location}
                    className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
                  />
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                      <FaBangladeshiTakaSign
                        size={16}
                        className="text-[#9dff3f]"
                      />{" "}
                      Price/Hour
                    </label>
                    <input
                      type="number"
                      name="price_per_hour"
                      required
                      min={1}
                      defaultValue={facility.price_per_hour}
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
                      defaultValue={facility.capacity}
                      className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <Clock size={16} className="text-[#9dff3f]" /> Select Time
                    Slots
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {availableSlots.map((slot) => (
                      <label
                        key={slot}
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                          selectedSlots.includes(slot)
                            ? "bg-[#9dff3f]/10 border-[#9dff3f]"
                            : "bg-[#0d0e12] border-[#2e3038] hover:border-gray-500"
                        }`}
                      >
                        <input
                          type="checkbox"
                          onChange={() => handleMultipleSlots(slot)}
                          className="w-4 h-4 rounded"
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
                  <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <FaNoteSticky size={16} className="text-[#9dff3f]" />{" "}
                    Description
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    defaultValue={facility.description}
                    className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <MdEmail size={16} className="text-[#9dff3f]" /> Owner Email
                  </label>
                  <input
                    type="email"
                    name="owner_email"
                    value={user?.email || ""}
                    disabled
                    className="w-full bg-[#0d0e12] border border-[#2e3038] text-gray-500 rounded-xl px-4 py-3 text-sm outline-none transition"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    slot="close"
                    className="flex-1 bg-[#0d0e12] border border-[#2e3038] text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-[#9dff3f] text-[#0d0e12] font-bold rounded-xl hover:bg-[#b4ff6a] transition"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditFacilityForm;
