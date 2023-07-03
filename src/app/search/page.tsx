import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "./components/Header";
import SearchSidebar from "./components/SearchSidebar";
import ServiceCard from "./components/ServiceCard";

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Navbar />
        {/* HEADER */}
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSidebar />
          <div className="w-5/6">
            <ServiceCard />
          </div>
        </div>
      </main>
    </main>
  );
}
