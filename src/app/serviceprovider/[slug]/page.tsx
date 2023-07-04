import Header from "./components/Header";

import ServiceNavBar from "./components/ServiceNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

export default function serviceprovider() {
  return (
    <>
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
      {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
      {/* RESERVATION
          CARD PORTION */}
    </>
  );
}
