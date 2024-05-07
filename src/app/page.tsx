import Link from "next/link"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
            <div className="flex flex-col items-center">
                <p className="text-3xl text-dark-tremor-content-strong font-semibold mb-10">
                    To the analytics page click on the button
                </p>
                <Link href="/analytics">
                    <button className="bg-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-300">
                        Go to Analytics Page
                    </button>
                </Link>
            </div>
        </main>
    )
}
