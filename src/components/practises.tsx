import {
    FaUserFriends,
    FaUserInjured,
    FaGavel,
    FaBriefcase,
    FaScroll,
    FaHome
} from 'react-icons/fa'

const practices = [
    {
        icon: FaUserFriends,
        title: "Criminal Law",
        description: "Defending your rights with expertise and dedication in all criminal matters, ensuring a fair trial and justice."
    },
    {
        icon: FaUserInjured,
        title: "Matrimonial disputes",
        description: "Offering compassionate and effective legal solutions for divorce, custody, and family disputes."
    },
    {
        icon: FaGavel,
        title: "Bail",
        description: "Securing timely bail and protecting your rights during crucial moments in legal proceedings."
    },
    {
        icon: FaBriefcase,
        title: "Negotiable instrument Act",
        description: "Resolving cheque bounce cases with precision to safeguard your financial interests."
    },
    {
        icon: FaScroll,
        title: "Suit recovery",
        description: "Ensuring swift recovery of dues through effective legal representation and strategy."
    },
    {
        icon: FaHome,
        title: "Intellectual property rights",
        description: "Protecting your innovations and creative works with expert IPR legal services."
    }
]

export function Practices() {
    return (
        <section className="bg-[#1C1C24] py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-base-300">
                    Our Practice Area
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {practices.map((practice, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-lg text-neutral-content hover:bg-gray-800/50 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-4">
                                <practice.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 ">
                                {practice.title}
                            </h3>
                            <p className="text-neutral-content/80">
                                {practice.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

