import FreeConsultationButton from "@/components/free_consultation"
import { GoLaw } from "react-icons/go";
import Link from "next/link"


export function Navbar() {

    return (
        <nav className="bg-base-100 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">

                        <GoLaw className="text-4xl mr-3" />

                        <Link href="/" className="text-2xl font-black  ">
                            I &amp; G Associates
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#home"
                            className="text-gray-700 text-base font-medium tracking-wide hover:text-gray-900">
                            Home
                        </Link>
                        <Link
                            href="#about"
                            className="text-gray-700 text-base font-medium tracking-wide hover:text-gray-900">
                            About
                        </Link>
                        <Link
                            href="#practices"
                            className="text-gray-700 text-base font-medium tracking-wide hover:text-gray-900">
                            Practice Areas
                        </Link>
                        <Link
                            href="#cta"
                            className="text-gray-700 text-base font-medium tracking-wide hover:text-gray-900">
                            Contact
                        </Link>
                        <FreeConsultationButton />
                    </div>

                    <button className="md:hidden btn btn-ghost" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

