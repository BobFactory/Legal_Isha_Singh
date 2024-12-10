import Image from "next/image"
import FreeConsultationButton from "./free_consultation"
import { GoLaw } from "react-icons/go";

export function Hero() {
    return (
        <div className="bg-background text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">

                        <GoLaw className="text-neutral-content text-9xl" />

                        <div className="inline-block">
                            <span className="bg-[#2A2536] text-sm uppercase font-bold tracking-widest px-4 py-2">
                                # Best Legal services
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-neutral-content">
                            Expert <span className="text-primary">Legal</span> Counsel For Your Needs
                        </h1>

                        <p className="text-gray-400 text-lg max-w-xl">
                            As a dedicated legal professional, we provide personalized,
                            comprehensive services to clients in India,
                            ensuring every case gets the attention it deserves.
                        </p>

                        <div className="space-y-4">
                            <FreeConsultationButton />
                        </div>
                    </div>

                    <div className="relative rounded-xl aspect-square overflow-hidden">
                        <Image
                            fill
                            src="./img_hero.jpg"
                            alt="Legal Team"
                            sizes="100vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

