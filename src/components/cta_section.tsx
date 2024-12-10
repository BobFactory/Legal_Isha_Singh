import { FaStar, FaGoogle } from "react-icons/fa"

export function CTASection() {
    return (
        <section className="bg-base-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-5xl font-bold text-base-content">
                            Are You in Trouble with any Cases? Contact us!
                        </h2>
                        <p className="text-base-content/80 text-lg max-w-xl">
                            Your trusted partner in legal matters. I offer comprehensive legal services to clients
                            across India.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-6 lg:justify-end">
                        <div className="w-full p-8 border-2 border-secondary rounded-lg">
                            <h3 className="capitalize text-3xl font-black">Isha Singh</h3>
                            <p className="capitalize text-lg mt-2 text-gray-500">patiala house court complex</p>
                            <p className="text-lg mt-1 text-gray-500">Phone: +91 9599742449</p>
                            <p className="text-lg mt-1 text-gray-500">Email : advishasingh9@gmail.com </p>
                        </div>

                        {false && <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-2">
                            <div className="flex items-center gap-2">
                                <FaGoogle className="w-5 h-5 text-base-content" />
                                <span className="font-semibold text-xl">4.5</span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() < 0.5) ? 'text-yellow-400' : 'text-yellow-400/30'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <span className="text-base-content/70">
                                (1000+ Reviews)
                            </span>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

