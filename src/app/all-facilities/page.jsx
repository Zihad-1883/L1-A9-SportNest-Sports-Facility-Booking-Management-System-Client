import React from "react";
import SearchAndFilter from "../components/SearchAndFilter";

const AllFacilitiesPage = async () => {
  let facilities = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/all-facilities`,
      { cache: "no-store" },
    );
    if (res.ok) {
      facilities = await res.json();
    }
  } catch (err) {
    // console.error("Failed to fetch:", err.message);
  }
  // console.log(facilities);

  return (
    <div className="container mx-auto">
      <div className="my-10 text-center md:text-left">
        <h2 className="text-5xl font-black text-white mb-2">
          Discover <span className="text-[#9dff3f]">Facilities</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Find the perfect spot for your favorite sport.
        </p>
      </div>
      <SearchAndFilter facilities={facilities} />
    </div>
  );
};

export default AllFacilitiesPage;
