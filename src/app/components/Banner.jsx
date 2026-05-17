import React from "react";
import BannerImage from "../../assets/banner.jpg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-[#0d0e12] min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-1 text-center lg:text-left p-5">
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            Elevate Your <br /> Game With{" "}
            <span className="text-[#9dff3f]">SportNest</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-md mx-auto lg:mx-0">
            The ultimate platform to discover and book premium sports facilities
            in your city. Join thousands of athletes today!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href={"facilities"}
              className="btn bg-[#9dff3f] text-[#0d0e12] font-bold hover:bg-[#b4ff6a] border-none px-8"
            >
              Explore Facilities →
            </Link>
            <button className="btn bg-[#1a1b22] text-white border border-[#2e3038] hover:border-gray-500 px-8">
              <Link href={"/login"}>Login →</Link>
            </button>
          </div>

          <div className="mt-12 flex gap-10 justify-center lg:justify-start">
            <div>
              <p className="text-white text-2xl font-bold">500+</p>
              <p className="text-gray-500 text-sm">Facilities</p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold">10k+</p>
              <p className="text-gray-500 text-sm">Users</p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold">4.9/5</p>
              <p className="text-gray-500 text-sm">Rating</p>
            </div>
          </div>
        </div>

        <div className="flex-1 lg:flex justify-end p-5">
          <Image
            src={BannerImage}
            alt="Banner"
            className="max-w-lg h-[500px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
