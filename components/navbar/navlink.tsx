"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";

const NavLink = () => {
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="primary-menu"
        aria-label="Toggle navigation"
        className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100"
      >
        {!open ? <IoMenu className="h-8 w-8" /> : <IoClose className="h-8 w-8" />}
      </button>

      <div
        id="primary-menu"
        className={clsx(
          // Mobile: dropdown under navbar, full width; Desktop: static
          "w-full md:w-auto md:block md:static absolute left-0 right-0 top-full bg-white md:bg-transparent shadow-md md:shadow-none",
          {
            hidden: !open,
          }
        )}
      >
        <ul
          className="flex flex-col font-semibold text-sm uppercase p-4 mt-2 rounded-sm md:mt-0 md:p-0
          md:flex-row md:items-center md:space-x-10"
        >
          <li>
            <Link
              href="/"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/room"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/myreservation"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              My Reservation
            </Link>
          </li>
          <li>
            <Link
              href="/admin/dashboard"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/room"
              onClick={handleLinkClick}
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Manage Rooms
            </Link>
          </li>
          <li className="pt-2 md:pt-0">
            <Link
              href="/signin"
              onClick={handleLinkClick}
              className="py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm block md:inline-block"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLink;
