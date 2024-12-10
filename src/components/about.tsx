export default function About() {
    return (
        <div className="bg-base-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg lg:text-xl text-gray-700">
                            As a legal advocate, I am dedicated to delivering exceptional
                            legal representation and personalized guidance tailored to your unique needs.
                            With years of experience spanning diverse legal areas, I specialize in providing
                            thoughtful, results-driven solutions to help you navigate your legal challenges
                            with confidence and clarity.
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

