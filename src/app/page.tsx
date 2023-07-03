import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ServiceProviderCard from "./components/ServiceProviderCard";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <main>
          {/* HEADER */}
          <Header />
          {/* HEADER */} {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {/* CARD */}
            <ServiceProviderCard />
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
