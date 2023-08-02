import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-200 min-h-screen flex">
      <div className="flex-4">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 mx-auto">
        <Header />
        <MainContent />
      </div>
    </main>
  );
}
