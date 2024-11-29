"use client";
import { Poppins } from "next/font/google";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200"],
});

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // Track header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-primary bg-opacity-65 text-white transition-transform duration-1000 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto py-8 xl:py-10 flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className={`text-3xl font-semibold ${poppins.className}`}>
            Kaushal<span className="text-white/60">Rai</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        {/* hire me button */}
        <div className="hidden xl:flex">
          <Link href="/contact">
            <Button variant="outline">Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
