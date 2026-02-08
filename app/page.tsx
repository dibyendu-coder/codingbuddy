import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import RuixenMoonChat from "@/components/ui/ruixen-moon-chat";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <ScrollyCanvas />
      <Projects />
      <RuixenMoonChat />
    </main>
  );
}
