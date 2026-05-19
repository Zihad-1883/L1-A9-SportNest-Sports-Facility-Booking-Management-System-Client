import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import MyBookingsPage from '../components/MyBooking';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const res = await fetch(`http://localhost:8080/my-bookings/${user?.id}`)
    const bookings = await res.json();
    // console.log(bookings)

    return (
        <div className="bg-[#0d0e12] min-h-screen py-16 px-6">
             <div className="container mx-auto">
                <h2 className="text-4xl font-black text-white mb-2">
                My <span className="text-[#9dff3f]">Bookings</span>
                </h2>
                <p className="text-gray-400 text-sm mb-10">
                Manage and track your facility reservations.
                </p>
             </div>
            <MyBookingsPage bookings={bookings}></MyBookingsPage>
        </div>
    );
};

export default MyBookingPage