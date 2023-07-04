import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ServiceProviderCard from "./components/ServiceProviderCard";

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <Header />
      {/* HEADER */} {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
        <ServiceProviderCard />
        {/* CARD */}
      </div>
    </main>
  );
}
