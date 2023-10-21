"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "../button/page";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
    const [isScroll, setScroll] = useState(false);
    const [isOpen, setOpen] = React.useState(true);
    const pathName = usePathname();
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !(navRef.current as any).contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <>
            <nav className={`w-full flex xl:px-32 xl:mt-12 fixed px-[5%] z-50 ${isScroll ? "drop-shadow-xl" : ""}`} ref={navRef}>
                <div className="w-full bg-none xl:bg-basic flex flex-col xl:flex-row justify-between xl:px-8 xl:py-2 xl:rounded-[10px]">
                    <div className="flex items-center w-full xl:w-fit justify-between bg-basic xl:bg-none mt-4 xl:mt-0 px-4 xl:px-0 rounded-xl">
                        <Link href="/" className="hover:scale-110 transform duration-700">
                            <Image
                                alt="brand"
                                src={"./images/Bizpro.svg"}
                                height={500}
                                width={500}
                                className="w-[80px] h-[80px]" />
                        </Link>
                        <div className="xl:hidden">
                            <button
                                onClick={() => setOpen(!isOpen)}
                                className="w-14 h-14 rounded-xl bg-[#060640] text-basic flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Desktop */}
                    <div className="hidden xl:flex items-center gap-8">
                        <Link href="/" className={`w-full xl:w-fit justify-center flex p-3 xl:p-0 rounded-xl hover:scale-110 hover:font-semibold transform duration-700 ${pathName === "/" ? "font-semibold scale-110" : ""}`}>Home</Link>
                        <Link href="/about" className={`w-full xl:w-fit justify-center flex p-3 xl:p-0 rounded-xl hover:scale-110 hover:font-semibold transform duration-700 ${pathName === "/about" ? "font-semibold scale-110" : ""}`}>About</Link>
                        <Link href="/service" className={`w-full xl:w-fit justify-center flex p-3 xl:p-0 rounded-xl hover:scale-110 hover:font-semibold transform duration-700 ${pathName === "/service" ? "font-semibold scale-110" : ""}`}>Service</Link>
                        <Link href="/review" className={`w-full xl:w-fit justify-center flex p-3 xl:p-0 rounded-xl hover:scale-110 hover:font-semibold transform duration-700 ${pathName === "/review" ? "font-semibold scale-110" : ""}`}>Review</Link>
                        <Link href="/support" className={`w-full xl:w-fit justify-center flex p-3 xl:p-0 rounded-xl hover:scale-110 hover:font-semibold transform duration-700 ${pathName === "/support" ? "font-semibold scale-110" : ""}`}>Support</Link>
                    </div>

                    {/* mobile first */}
                    {isOpen && (
                        <div className={`flex flex-col gap-2 mt-4 bg-basic rounded-xl p-8 md:hidden ${isOpen ? "translate-y-0 transform duration-700" : "-translate-y-full"}`}>
                            <Link onClick={() => setOpen(false)} href="/" className={`text-base hover:bg-[#060640] p-4 rounded-xl hover:text-basic transform duration-700 ${pathName === "/" ? "bg-[#060640] text-basic font-semibold scale-105" : ""}`}>Home</Link>
                            <Link onClick={() => setOpen(false)} href={"/about"} className={`text-base hover:bg-primary p-4 rounded-xl hover:text-basic transform duration-700 ${pathName === "/about" ? "bg-[#060640] text-basic font-semibold scale-105" : ""}`}>About</Link>
                            <Link onClick={() => setOpen(false)} href={"/service"} className={`text-base hover:bg-primary p-4 rounded-xl hover:text-basic transform duration-700 ${pathName === "/service" ? "bg-[#060640] text-basic font-semibold scale-105" : ""}`}>Service</Link>
                            <Link onClick={() => setOpen(false)} href={"/review"} className={`text-base hover:bg-primary p-4 rounded-xl hover:text-basic transform duration-700 ${pathName === "/review" ? "bg-[#060640] text-basic font-semibold scale-105" : ""}`}>Review</Link>
                            <Link onClick={() => setOpen(false)} href={"/support"} className={`text-base hover:bg-primary p-4 rounded-xl hover:text-basic transform duration-700 ${pathName === "/support" ? "bg-[#060640] text-basic font-semibold scale-105" : ""}`}>Support</Link>
                        </div>
                    )}
                    <div className="buttonGroup xl:flex items-center gap-6 hidden">
                        <Link href="/">
                            <Button variant="links" className="btnLinks">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="primary" className="btnPrimary">
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
