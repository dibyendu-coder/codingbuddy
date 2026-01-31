import Link from "next/link";

interface Tool {
    name: string;
    url: string;
}

const tools: Tool[] = [
    { name: "Mocha", url: "https://getmocha.com/" },
    { name: "Orchids", url: "https://www.orchids.app/" },
    { name: "Taskade", url: "https://www.taskade.com/spaces/p40fdv18eebzuect" },
    { name: "Atoms", url: "https://atoms.dev/" },
    { name: "Solid", url: "https://trysolid.com/" },
    { name: "Reflex", url: "https://build.reflex.dev/" },
    { name: "Codeflying", url: "https://www.codeflying.app/login" },
    { name: "Aura", url: "https://www.aura.build/" },
    { name: "Openalternative", url: "https://openalternative.co/alternatives" },
    { name: "creao", url: "https://creao.ai/" },
    { name: "21.dev", url: "https://21st.dev/community/components/s/button" },
    { name: "youware", url: "https://i.youware.com/" },
    { name: "tile.dev", url: "https://tile.dev/dashboard/e9144479-d50e-4371-928d-c07bab113998" },
    { name: "flames", url: "https://flames.blue/" },
    { name: "chatz.ai", url: "https://chat.z.ai/" },
];

export default function Projects() {
    return (
        <section className="min-h-screen bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 text-[#ededed]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">AI Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tools.map((tool) => (
                        <Link
                            key={tool.name}
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-6 bg-[#1a1a1a] rounded-xl border border-[#333] hover:border-[#555] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                                {tool.name}
                            </h3>
                            <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                Visit Website &rarr;
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
