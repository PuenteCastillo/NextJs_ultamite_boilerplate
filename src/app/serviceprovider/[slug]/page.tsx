import Header from "./components/Header";
import { PrismaClient } from "@prisma/client";
import ServiceNavBar from "./components/ServiceNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

const prisma = new PrismaClient();

interface ServiceType {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const fetchRestaurantsBySlug = async (slug: string): Promise<ServiceType> => {
  const restaurants = await prisma.restaurant.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurants) {
    throw new Error("No restaurant found");
  }

  return restaurants;
};

export default async function serviceprovider({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantsBySlug(params.slug);

  console.log(restaurant);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <ServiceNavBar slug={restaurant.slug} />
        {/* TITLE */}
        <Title name={restaurant.name} />
        {/* TITLE */}
        <Rating />
        {/* DESCRIPTION */}
        <Description description={restaurant.description} />
        {/* DESCRIPTION */}
        {/* IMAGES */}
        <Images images={restaurant.images} />
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
