"use client";
import React, { useEffect, useRef, useState } from "react";
import NavbarIcon from "../../../public/assets/navbarIcon.svg";
import NavbarMobile from "../../../public/assets/navbarMobile.svg";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";

const Navbar = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar dropdown al hacer click fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Convert to 'mousedown' event type
    const eventListener = (event: Event) =>
      handleClickOutside(event as MouseEvent);

    document.addEventListener("mousedown", eventListener);
    return () => document.removeEventListener("mousedown", eventListener);
  }, [dropdownRef]);

  return (
    <nav
      ref={dropdownRef}
      className={`w-full flex flex-row justify-end items-center pt-6 px-6 sm:px-11 ${
        isOpen ? "fixed z-40" : "fixed z-[5]"
      }`}
    >
      <button
        aria-label="burger menu"
        className={`group ${isOpen ? "text-lightGreen" : ""}`}
        onClick={toggleDropdown}
      >
        {width && width >= 395 ? (
          <NavbarIcon className="group-hover:text-lightGreen transition-colors w-10 h-10" />
        ) : (
          <NavbarMobile className="group-hover:text-lightGreen transition-colors w-auto h-auto" />
        )}
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-[2] top-14 sm:top-[66px]"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-14 m-2 py-4 px-6 w-40 bg-white border rounded-[10px] shadow-lg z-[5] sm:right-6">
            <ul className="flex flex-col justify-center items-center gap-1 text-sm">
              <Link
                href="/"
                className="group border-b-[1px] border-b-lightGreen w-full"
              >
                <li className="group-hover:text-lightGreen transition-colors text-black py-2">
                  ABOUT
                </li>
              </Link>
              <Link
                href="/projects"
                className="group border-b-[1px] border-b-lightGreen w-full"
              >
                <li className="group-hover:text-lightGreen transition-colors text-black py-2">
                  PROJECTS
                </li>
              </Link>
              <Link
                href="/contact"
                className="group border-b-[1px] border-b-lightGreen w-full"
              >
                <li className="group-hover:text-lightGreen transition-colors text-black py-2">
                  CONTACT
                </li>
              </Link>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
