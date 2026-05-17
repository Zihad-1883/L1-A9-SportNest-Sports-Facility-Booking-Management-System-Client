"use client";

import { useState } from "react";
import { Input, Button } from "@heroui/react";
import { Search, SlidersHorizontal } from "lucide-react";

const categories = [
  "All",
  "Football",
  "Cricket",
  "Badminton",
  "Swimming",
  "Tennis",
  "Gym",
  "Basketball",
];

const AllFacilitiesPage = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");
  console.log(search);

  const handleSearch = (e) => {
    console.log(search);
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="bg-[#0d0e12] px-6 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-black text-white mb-2">
          Discover <span className="text-[#9dff3f]">Facilities</span>
        </h2>
        <p className="text-gray-400 text-sm mb-10">
          Find the perfect spot for your favorite sport.
        </p>

        <div className="bg-[#1a1b22] border border-[#2e3038] rounded-2xl p-6 flex flex-col gap-6">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <Input
              placeholder="Search by facility name..."
              startContent={<Search size={18} className="text-gray-500" />}
              classNames={{
                inputWrapper:
                  "bg-[#0d0e12] border border-[#2e3038] rounded-xl hover:border-[#9dff3f] focus-within:border-[#9dff3f] transition h-12",
                input: "text-white placeholder:text-gray-600 text-sm",
              }}
            />
            <Button
              type="submit"
              className={`bg-[#9dff3f] text-[#0d0e12] border-[#9dff3f]`}
            >
              Search
            </Button>
          </form>

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
      </div>
    </div>
  );
};

export default AllFacilitiesPage;
