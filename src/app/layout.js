import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SportNest | Premium Sports Facility Booking Platform",
  description: "Discover and book the best sports facilities in your city. From football turfs to badminton courts, SportNest makes it easy for athletes to stay active.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0e12]">
        <div className="sticky top-0 z-[100] w-full bg-[#0d0e12]/80 backdrop-blur-md border-b border-[#1e2029]">
          <Navbar></Navbar>
        </div>
          <ToastContainer />
          {children}
          <Footer></Footer>
        </body>
    </html>
  );
}
