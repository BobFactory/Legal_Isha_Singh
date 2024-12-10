'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
    {
        id: 1,
        content: "I hired Isha Singh for a legal dispute over a property, and she handled the case exceptionally. She guided me through every step of the legal proceedings and also helped me gain my property back from my relatives. A truly outstanding legal practice that prioritizes their clients' interests with utmost sincerity.",
        author: "Bawender Yandra",
        role: "Software Engineer",
        avatar: "BY"
    },
    {
        id: 2,
        content: "Isha Singh helped me solve a content dispute with a corporate entity and helped me do a out of the court settlement. I am grateful for her legal insights and her persuasive skills that helped me solve a heavy lawsuit.",
        author: "Aditi Singh",
        role: "Social Media Executive",
        avatar: "SJ"
    },
    {
        id: 3,
        content: "Isha helped me settle down a heavy motor vehicle act dispute.",
        author: "Abhishek Tomar",
        role: "Webiste Developer",
        avatar: "AT"
    }
]

export function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    return (
        <section className="bg-[#1C1C24] relative overflow-hidden">
            {/* Dotted pattern overlay */}
            <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
                <div className="w-full h-full bg-primary/20"
                    style={{
                        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-2xl uppercase tracking-wider text-white font-black">
                            Testimonial
                        </h2>

                        <div className="relative min-h-[300px]">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <blockquote className="space-y-8">
                                        <p className="text-lg text-neutral-content/80">
                                            {testimonial.content}
                                        </p>

                                        <footer className="flex items-center gap-4">

                                            <div className="avatar online placeholder">
                                                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                                    <span className="text-xl">{testimonial.avatar}</span>
                                                </div>
                                            </div>

                                            <div>
                                                <cite className="not-italic font-semibold text-neutral-content">
                                                    {testimonial.author}
                                                </cite>
                                                <p className="text-sm text-neutral-content/70">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                            <div className="flex gap-1 ml-auto">
                                                {[...Array(4)].map((_, i) => (
                                                    <FaStar key={i} className="text-amber-400 w-5 h-5" />
                                                ))}
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-neutral-content/20'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-2 ml-auto">
                                <button
                                    onClick={prevSlide}
                                    className="p-2 border rounded hover:bg-base-300 transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <FaChevronLeft className="w-4 h-4 text-neutral-content" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="p-2 border rounded hover:bg-base-300 transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <FaChevronRight className="w-4 h-4 text-neutral-content" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-xl overflow-hidden">
                        <Image
                            src="/img_court.jpg"
                            alt="Legal team in office"
                            fill
                            className="object-cover"
                        />
                        {/* Mobile dotted overlay */}
                        <div className="absolute inset-0 bg-primary/20 lg:hidden"
                            style={{
                                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
