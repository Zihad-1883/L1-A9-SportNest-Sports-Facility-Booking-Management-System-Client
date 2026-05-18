import React from "react";

const BookingForm = () => {
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Facility Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <MapPin size={16} className="text-[#9dff3f]" />
              Facility Name
            </label>
            <input
              type="text"
              name="facilityName"
              value={bookingData.facilityName}
              onChange={handleChange}
              required
              placeholder="Select facility"
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
            />
          </div>

          {/* Booking Date */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <Calendar size={16} className="text-[#9dff3f]" />
              Booking Date
            </label>
            <input
              type="date"
              name="bookingDate"
              value={bookingData.bookingDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition [color-scheme:dark]"
            />
          </div>

          {/* Time Slot */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <Clock size={16} className="text-[#9dff3f]" />
              Time Slot
            </label>
            <select
              name="timeSlot"
              value={bookingData.timeSlot}
              onChange={handleChange}
              required
              className="w-full bg-[#0d0e12] border border-[#2e3038] text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition cursor-pointer"
            >
              <option value="">Select time slot</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <Timer size={16} className="text-[#9dff3f]" />
              Number of Hours
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                name="hours"
                value={bookingData.hours}
                onChange={handleChange}
                required
                min={1}
                max={8}
                step={1}
                className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
              />
              <div className="bg-[#0d0e12] border border-[#2e3038] rounded-xl px-4 py-3 text-white text-sm whitespace-nowrap">
                hour(s)
              </div>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
              <DollarSign size={16} className="text-[#9dff3f]" />
              Total Price
            </label>
            <div className="bg-[#0d0e12] border border-[#9dff3f] rounded-xl px-4 py-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">
                  ${pricePerHour} × {bookingData.hours} hour
                  {bookingData.hours > 1 ? "s" : ""}
                </span>
                <span className="text-white font-bold text-xl">
                  ${totalPrice}
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
