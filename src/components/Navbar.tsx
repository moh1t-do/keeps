'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { User } from '@firebase/auth'
import { onAuthStateChanged } from "firebase/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { navItem } from "@/types/types";
import { auth } from '@/firebase/firebase';
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
        signOut(auth).then(() => {

        }).catch((error) => {

        })
    }

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
                    <ul className="flex gap-10 cursor-pointer items-center">
                        {navItems.map((ele: navItem, idx: number) => (
                            <li>
                                <Link key={idx} href={ele.navLink}>
                                    {ele.title}
                                </Link>
                            </li>
                        ))}
                        {authUser && <li><button onClick={handleSignOut} className="align-middle h-8 px-4 py-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">Logout</button></li>}
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
