import Link from "next/link";
import { ServiceCardType } from "../page";
import Price from "./price";

interface Props {
  restaurant: ServiceCardType;
}

export default function Navbar({ restaurant }: Props) {
  return (
    <>
      {/* CARD */}
      <Link href={`/serviceprovider/${restaurant.slug}`}>
        <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
          <img src={restaurant.main_image} alt="" className="w-full h-36" />
          <div className="p-1">
            <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
            <div className="flex items-start">
              <div className="flex mb-2">*****</div>
              <p className="ml-2">77 reviews</p>
            </div>
            <div className="flex text-reg font-light capitalize">
              <p className=" mr-3">{restaurant.cuisine.name}</p>
              <p className="mr-3">
                <Price price={restaurant.price} />
              </p>
              <p>{restaurant.location.name}</p>
            </div>
            <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
          </div>
        </div>
      </Link>
      {/* CARD */}
    </>
  );
}
