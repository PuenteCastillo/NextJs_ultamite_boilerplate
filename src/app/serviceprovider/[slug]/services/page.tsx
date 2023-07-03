import Navbar from "@/app/components/Navbar";
import Header from "../components/Header";
import ServiceNavBar from "../components/ServiceNavBar";
import Menu from "../components/Menu";

export default function services() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Navbar />
        {/* NAVBAR */} {/* HEADER */}
        <Header />
        {/* HEADER */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <ServiceNavBar />
            {/* RESAURANT NAVBAR */}
            <Menu />
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
