import Image from "next/image"

export function WhyChooseUs() {
    const benefits = [
        {
            "title": "Focused Expertise:",
            "description": "Specializing in delivering impactful solutions for criminal, matrimonial, and recovery cases."
        },
        {
            "title": "Client-Centric Approach:",
            "description": "Dedicated to understanding your unique situation and tailoring the best legal strategy."
        },
        {
            "title": "Transparent Communication:",
            "description": "Keeping you informed and involved at every step of your case."
        },
        {
            "title": "Fresh Perspective:",
            "description": "Leveraging modern legal practices to provide efficient and effective solutions."
        },
        {
            "title": "Proven Commitment:",
            "description": "Building trust through hard work, determination, and successful case resolutions."
        }
    ]


    return (
        <section className="bg-[#FFF8E6] relative overflow-hidden">
            {/* Dotted pattern overlay for the image section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-xl overflow-hidden">
                        <Image
                            src="./img_choose_us.jpg"
                            alt="Professional lawyer in office"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-4xl lg:text-5xl font-bold text-base-content">
                            Why Choose Our Law Services?
                        </h2>

                        <ul className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex gap-2">
                                    <span className="text-primary">•</span>
                                    <div>
                                        <span className="font-semibold text-base-content">
                                            {benefit.title}
                                        </span>{" "}
                                        <span className="text-base-content/80">
                                            {benefit.description}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}

