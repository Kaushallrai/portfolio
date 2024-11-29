"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/#services",
    target: "services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  const handleScroll = (e, targetId) => {
    if (targetId) {
      e.preventDefault(); // Prevent default navigation behavior for internal scrolling
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          onClick={() => handleScroll(link.target)}
          className={`${
            pathname === link.path && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
