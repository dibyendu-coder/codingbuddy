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
        <section className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0a1a] to-[#0a0a0f] py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
            
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large purple orb - top left */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float-slow" />
                
                {/* Large cyan orb - bottom right */}
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse-slow-delayed" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl animate-float-slow-reverse" />
                
                {/* Medium orbs */}
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/15 rounded-full blur-3xl animate-float-medium" />
                <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl animate-float-medium-reverse" />
                
                {/* Small accent orbs */}
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-300/10 rounded-full blur-2xl animate-float-fast" />
                <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-cyan-300/10 rounded-full blur-2xl animate-float-fast-reverse" />
            </div>
            
            {/* Animated grid pattern overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    animation: 'grid-move 20s linear infinite'
                }}
            />
            
            {/* Radial gradient overlays for depth */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)'
                }}
            />
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)'
                }}
            />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center tracking-tight bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent px-4">
                    AI Tools
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tools.map((tool) => (
                        <Link
                            key={tool.name}
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-5 sm:p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-[#2a2a2a] active:border-purple-500/50 hover:border-purple-500/50 transition-all duration-300 active:shadow-2xl active:shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/20 active:-translate-y-1 hover:-translate-y-2 relative overflow-hidden touch-manipulation"
                        >
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-cyan-500/0 to-purple-500/0 group-active:from-purple-500/10 group-active:via-cyan-500/5 group-active:to-purple-500/10 group-hover:from-purple-500/10 group-hover:via-cyan-500/5 group-hover:to-purple-500/10 transition-all duration-300 rounded-xl" />
                            
                            <div className="relative z-10">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-active:text-transparent group-active:bg-gradient-to-r group-active:from-purple-400 group-active:to-cyan-400 group-active:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                                    {tool.name}
                                </h3>
                                <p className="text-gray-400 text-sm opacity-0 group-active:opacity-100 group-hover:opacity-100 transition-opacity duration-300 group-active:text-cyan-300 group-hover:text-cyan-300">
                                    Visit Website &rarr;
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
