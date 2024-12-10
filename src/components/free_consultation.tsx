import Link from "next/link";


export default function FreeConsultationButton() {
    return (
        <Link
            href="#cta"
            className="px-6 py-3 shadow-lg font-semibold bg-yellow-300 hover:bg-yellow-500 text-gray-800/80 rounded-sm capitalize">
            Free Consultation
        </Link>
    )
}