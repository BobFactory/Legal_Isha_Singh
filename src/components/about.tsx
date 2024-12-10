export default function About() {
    return (
        <div className="bg-base-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-base-content">
                            About Us
                        </h2>

                        <p className="text-lg lg:text-xl text-gray-700">
                            At I &amp; G Associates, we are dedicated to providing top-notch{" "}
                            <span className="font-semibold">legal representation</span> and guidance
                            tailored to your individual needs. With over{" "}
                            <span className="font-semibold">25 years</span> of combined experience,
                            our team of highly skilled attorneys specializes in a diverse range of
                            legal areas, ensuring that no matter your issue, we&apos;ve got you covered.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { number: "12+", label: "We have faced law cases" },
                            { number: "2+", label: "Years of experience" },
                            { number: "90%", label: "Case win record" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-8 border-l border-b border-primary hover:shadow-lg transition-shadow"
                            >
                                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

