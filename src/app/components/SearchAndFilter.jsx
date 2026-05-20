"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { SlidersHorizontal } from "lucide-react";
import FacilitiesCard from "./FacilitiesCard";

const categories = [
  "All",
  "Football",
  "Badminton",
  "Swimming",
  "Tennis",
  "Gym",
  "Cricket",
  "Basketball",
  "Squash",
];

export default function SearchAndFilter({ facilities }) {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const filtered = facilities.filter((f) => {
    const filteredSearchValue = f.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const filteredFilterValue =
      active === "All" ||
      f.facility_type.toLowerCase() === active.toLowerCase();
    return filteredSearchValue && filteredFilterValue;
  });

  // const filteredSearchValue = facilities.filter((f) =>
  //   f.name.toLowerCase().includes(search.toLowerCase()),
  // );
  // console.log(filteredSearchValue);

  // const filteredFilterValue = facilities.filter((f) => {
  //   return f.facility_type.toLowerCase().includes(active.toLowerCase());
  // });
  // console.log(filteredFilterValue);

  console.log(search);
  console.log(active);

  return (
    <div className="container mx-auto">
      <div className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl p-6 flex flex-col gap-6 mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by facility name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0d0e12] border border-[#2e3038] text-white placeholder-gray-600 rounded-xl pl-4 pr-4 py-3 text-sm outline-none focus:border-[#9dff3f] transition"
          />
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <SlidersHorizontal
            size={18}
            className="text-[#9dff3f] flex-shrink-0"
          />
          {categories.map((cat) => (
            <Button
              key={cat}
              onPress={() => setActive(cat)}
              className={`rounded-full text-sm font-medium px-4 h-9 border transition ${
                active === cat
                  ? "bg-[#9dff3f] text-[#0d0e12] border-[#9dff3f]"
                  : "bg-[#0d0e12] text-gray-300 border-[#2e3038] hover:border-gray-500"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
      <FacilitiesCard facilities={filtered} />
    </div>
  );
}
