import HomeCanvas from "../components/canvas";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] h-screen">
      <aside className="hidden md:block bg-[#101828] border-r border-gray-700 p-4">
        <Sidebar />
      </aside>
      <main className="p-6 overflow-auto bg-[#030712]">
        <HomeCanvas />
      </main>
    </div>
  );
}
