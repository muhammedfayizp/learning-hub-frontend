import Navbar from "@/components/Navbar";
import ResourceGrid from "@/components/ResourceGrid";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10">
                {/* Hero Section */}
                <div className="mb-10 w-full rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-center text-white shadow-xl">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Learning Resource Hub
                    </h1>

                    <p className="mx-auto mt-3 max-w-2xl text-lg opacity-90">
                        Organize tutorials, documentation, and notes.
                        Filter by category, search by keywords, and explore tags.
                    </p>
                </div>

                {/* Main Content */}
                <div className="w-full">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Resources</h2>

                        <button
                            className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
                        >
                            + Add Resource
                        </button>
                    </div>

                    <ResourceGrid />
                </div>
            </div>
        </main>
    );
}