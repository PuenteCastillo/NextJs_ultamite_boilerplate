import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Header from "./Components/Header";
import Form from "./Components/Form";

export default function reserve() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Navbar />
        {/* NAVBAR END */}
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />

            <Form />
          </div>
        </div>
      </main>
    </main>
  );
}
