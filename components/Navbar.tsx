"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart, Heart, Notebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center max-sm:px-2 bg-main-violet">
      <Link href="/">
        {/* <Image src="/logo.png" alt="logo" width={130} height={100} /> */}
      </Link>

      <div className="flex gap-3 border border-[#958d8b] px-3 py-1 items-center rounded-lg basis-1/3 justify-between">
        <input
          className="outline-none max-sm:max-w-[120px] bg-main-violet"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-brown-1" />
        </button>
      </div>

      <div className="max-lg:hidden relative flex gap-3 items-center">
      <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-2 py-1 max-md:hidden"
        >
          <p className="text-grey-3 uppercase text-small-medium hover:text-brown-1">Home</p>
        </Link>
        <Link
          href="/about"
          className="flex items-center gap-3 rounded-lg px-2 py-1 max-md:hidden"
        >
          <p className="text-grey-3 uppercase text-small-medium hover:text-brown-1">About</p>
        </Link>

        <Link
          href="/contact"
          className="flex items-center gap-3 rounded-lg px-2 py-1 max-md:hidden"
        >
          <p className="text-grey-3 uppercase text-small-medium hover:text-brown-1">Contact</p>
        </Link>
      </div>

      <div className="relative flex gap-3 items-center">

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link href="/" className="hover:text-red-1">
              Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
