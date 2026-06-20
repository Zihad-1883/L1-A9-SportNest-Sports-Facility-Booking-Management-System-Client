"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { SlidersHorizontal } from "lucide-react";
import FacilitiesCard from "./FacilitiesCard";
import { motion } from "framer-motion";

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

  // console.log(search);
  // console.log(active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
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
            {(search || active !== "All") && (
              <button
                onClick={() => {
                  setSearch("");
                  setActive("All");
                }}
                className="text-xs text-gray-500 hover:text-[#9dff3f] underline transition ml-2"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl overflow-hidden flex flex-col"
        >
          <FacilitiesCard facilities={filtered} />
        </motion.div>
      </div>
    </motion.div>
  );
}
