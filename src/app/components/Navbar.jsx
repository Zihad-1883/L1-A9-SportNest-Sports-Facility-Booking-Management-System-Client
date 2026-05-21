"use client";

import { Button, Dropdown, DropdownItem, DropdownMenu } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/all-facilities", label: "All Facilities" },
    { href: "/my-bookings", label: "My Bookings" },
    { href: "/add-facility", label: "Add Facility" },
    { href: "/manage-facilities", label: "Manage My Facilities" },
  ];

  const handleLogout = async () => {
    toast.success("Logout Successful");
    await authClient.signOut();
  };

  return (
    <div className="bg-[#0d0e12] border-b border-[#1e2029]">
      <div className="container mx-auto navbar p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#0d0e12] border border-[#1e2029] rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={
                      pathname === href
                        ? "text-[#9dff3f]"
                        : "text-gray-400 hover:text-white"
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2 ml-1">
            <div className="bg-[#9dff3f] text-[#0d0e12] font-bold text-sm w-9 h-9 rounded-lg flex items-center justify-center">
              SN
            </div>
            <span className="text-white font-semibold text-lg">SportNest</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    pathname === href
                      ? "text-[#9dff3f]"
                      : "text-gray-400 hover:text-white"
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {user ? (
          <div className="flex flex-wrap justify-center items-center gap-2">
            <Dropdown>
              <Button
                aria-label="Menu"
                className="bg-[#1a1b22] border border-[#2e3038] text-white hover:border-[#9dff3f] transition-all duration-300 rounded-xl px-4 py-2"
              >
                <div className="flex items-center gap-2">
                  {user?.image ? (
                    <Image
                      width={6}
                      height={6}
                      src={user?.image}
                      alt={user?.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-[#9dff3f] text-[#0d0e12] flex items-center justify-center text-xs font-bold">
                      {user?.name?.charAt(0) || "U"}
                    </div>
                  )}
                  <span className="text-sm font-medium">{user?.name}</span>
                </div>
              </Button>

              <Dropdown.Popover className="bg-[#1a1b22] border border-[#2e3038] rounded-xl mt-2 overflow-hidden">
                {links.map((link) => (
                  <Dropdown.Menu key={link.href}>
                    <Dropdown.Item
                      id={link.href}
                      textValue={link.label}
                      className="hover:bg-[#2a2b35] transition-colors duration-200"
                    >
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-gray-300 hover:text-[#9dff3f] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                ))}
                <DropdownMenu>
                  <DropdownItem className="hover:bg-[#2a2b35] transition-colors duration-200">
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-gray-300 hover:text-[#9dff3f] transition-colors duration-200"
                    >
                      Log Out
                    </button>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown.Popover>
            </Dropdown>
            {/* <button
              onClick={handleLogout}
              className="btn btn-sm bg-[#9dff3f] text-[#0d0e12] font-bold hover:bg-[#b4ff6a] border-none"
            >
              Log Out
            </button> */}
          </div>
        ) : (
          <div className="navbar-end gap-2">
            <Link
              href="/login"
              className="btn btn-sm btn-ghost border border-[#2e3038] text-gray-300 hover:text-white hover:border-gray-500"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-sm bg-[#9dff3f] text-[#0d0e12] font-bold hover:bg-[#b4ff6a] border-none"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
