import Header from "./components/Header";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import ServiceNavBar from "./components/ServiceNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

export default function serviceprovider() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <ServiceNavBar />
            {/* TITLE */}
            <Title />
            {/* TITLE */}
            <Rating />
            {/* DESCRIPTION */}
            <Description />
            {/* DESCRIPTION */}
            {/* IMAGES */}
            <Images />
            {/* IMAGES */}
            <Reviews />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>
        {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
        {/* RESERVATION
          CARD PORTION */}
      </main>
    </main>
  );
}