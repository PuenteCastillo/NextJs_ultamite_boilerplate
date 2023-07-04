import Header from "../components/Header";
import ServiceNavBar from "../components/ServiceNavBar";
import Menu from "../components/Menu";

export const metadata = {
  title: "Services | Open Table",
  description: "Generated by create next app",
};

export default function services() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <ServiceNavBar />
        {/* RESAURANT NAVBAR */}
        <Menu />
      </div>
    </>
  );
}
