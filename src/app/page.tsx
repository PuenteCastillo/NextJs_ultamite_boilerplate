import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ServiceProviderCard from "./components/ServiceProviderCard";

import { PrismaClient, Cuisine, Location, PRICE } from "@prisma/client";

export interface ServiceCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  price: PRICE;
}

//? data fetching ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const prisma = new PrismaClient();
const fetchRestaurants = async (): Promise<ServiceCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      slug: true,
      price: true,
    },
  });

  return restaurants;
};
//? data fetching End ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//! page ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default async function Home() {
  const restaurants = await fetchRestaurants();

  console.log(restaurants);

  return (
    <main>
      {/* HEADER */}
      <Header />
      {/* HEADER */} {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
        {restaurants.map((restaurant) => (
          <ServiceProviderCard restaurant={restaurant} key={restaurant.id} />
        ))}

        {/* CARD */}
      </div>
    </main>
  );
}
//! page end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
