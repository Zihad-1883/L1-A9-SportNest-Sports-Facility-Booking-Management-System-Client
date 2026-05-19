"use client";

import { AlertDialog, Button, DangerIcon } from "@heroui/react";

export function BookingDeleteAlert({ bookingId }) {
  //   console.log(bookingId);
  const handleDeleteBooking = async () => {
    const res = await fetch(`http://localhost:8080/my-bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data);
    window.location.reload();
  };
  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <button className="border border-red-500/40 text-red-400 text-sm px-4 py-2 rounded-xl hover:bg-red-500/10 transition">
          Cancel Booking
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Backdrop className="bg-black/60 backdrop-blur-sm">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl">
            <AlertDialog.CloseTrigger className="text-gray-500 hover:text-white transition absolute top-4 right-4" />

            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <span className="text-red-400 text-2xl">
                  <DangerIcon></DangerIcon>
                </span>
              </div>
            </div>

            <AlertDialog.Heading className="text-white font-black text-xl text-center mb-2">
              Cancel this <span className="text-red-400">Booking?</span>
            </AlertDialog.Heading>

            <AlertDialog.Body>
              <p className="text-gray-400 text-sm text-center">
                This will permanently cancel your booking. This action cannot be
                undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="flex gap-3 mt-6">
              <Button
                slot="close"
                className="flex-1 bg-[#0d0e12] border border-[#2e3038] text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition"
              >
                Keep Booking
              </Button>
              <Button
                onClick={handleDeleteBooking}
                slot="close"
                className="flex-1 bg-red-500/10 border border-red-500/40 text-red-400 rounded-xl hover:bg-red-500/20 transition"
              >
                Yes, Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
