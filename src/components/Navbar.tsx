'use client'
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { navItem } from "@/types/types";

const navItems: navItem[] = [
    { title: "Home", navLink: "/" },
    { title: "About", navLink: "/about" },
    { title: "Dashboard", navLink: "/dashboard" },
];

function Navbar(): React.ReactNode {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="flex h-20 w-full items-center justify-between uppercase border-b">
            <Link href="/" className="cursor-pointer">
                Link
            </Link>
            <div>
                <button className="sm:hidden" onClick={(): void => setIsOpen(!isOpen)}>
                    <GiHamburgerMenu />
                </button>
                <div className="sm:flex items-center gap-10 hidden">
                    <ul className="flex gap-10 cursor-pointer">
                        {navItems.map((ele: navItem, idx: number) => (
                            <Link key={idx} href={ele.navLink}>
                                {ele.title}
                            </Link>
                        ))}
                    </ul>
                </div>
                {/* mobile  */}
                {isOpen && (
                    <div className="w-screen fixed sm:hidden top left-0 h-full bg-black">
                        <div className="max-w-6xl mx-auto px-8">
                            <ul className="flex flex-col gap-10 cursor-pointer py-8">
                                {navItems.map((ele: navItem, idx: number) => (
                                    <div key={idx} className="border-b">
                                        <Link className="mx-auto py-4" href={ele.navLink}>
                                            {ele.title}
                                        </Link>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
