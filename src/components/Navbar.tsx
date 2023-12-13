"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { User } from "@firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { navItem } from "@/types/types";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";

const navItems: navItem[] = [
  { title: "Home", navLink: "/" },
  { title: "About", navLink: "/about" },
  { title: "Dashboard", navLink: "/dashboard" },
];

function Navbar(): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = (): void => {
    signOut(auth)
      .then(() => { })
      .catch((error) => { });
  };

  return (
    <div className="flex h-20 w-full items-center justify-between border-b uppercase py-8">
      <Link href="/" className="cursor-pointer outline-none">
        WISHES
      </Link>
      <div>
        <button className="sm:hidden" onClick={(): void => setIsOpen(!isOpen)}>
          <GiHamburgerMenu />
        </button>
        <div className="hidden items-center gap-10 sm:flex">
          <ul className="flex cursor-pointer items-center gap-10">
            {navItems.map((ele: navItem, idx: number) => (
              <li key={idx}>
                <Link href={ele.navLink}>
                  {ele.title}
                </Link>
              </li>
            ))}
            {authUser && (
              <li>
                <button
                  onClick={handleSignOut}
                  className="h-8 bg-blue-500 px-4 py-2  text-xs font-bold  uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        {/* mobile  */}
        {isOpen && (
          <div className="top fixed left-0 h-full w-screen bg-black py-4 sm:hidden">
            <div className="mx-auto max-w-6xl px-8">
              <ul className="flex cursor-pointer flex-col gap-10 py-4">
                {navItems.map((ele: navItem, idx: number) => (
                  <li key={idx}>
                    <Link className="mx-auto py-2" href={ele.navLink} onClick={(): void => setIsOpen(false)}>
                      {ele.title}
                    </Link>
                  </li>

                ))}
                {authUser && (
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="h-8 bg-blue-500 px-4 py-2  text-xs font-bold  uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
