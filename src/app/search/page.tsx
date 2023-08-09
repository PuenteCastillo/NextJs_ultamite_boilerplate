import Header from "./components/Header";
import SearchSidebar from "./components/SearchSidebar";
import ServiceCard from "./components/ServiceCard";
import { PrismaClient } from "@prisma/client";

//? data fetching ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const prisma = new PrismaClient();

const fetchRestaurantsByLocation = (location: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    price: true,
    location: true,
    slug: true,
  };

  if (!location) return prisma.restaurant.findMany({ select });

  // find restaurants by location
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: location.toLowerCase(),
        },
      },
    },
    select,
  });
};

const fetchAllLocations = async () => {
  return await prisma.location.findMany();
};

const fetchAllCuisines = async () => {
  return await prisma.cuisine.findMany();
};

//? data fetching End ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantsByLocation(searchParams.city);
  const locations = await fetchAllLocations();
  const cuisines = await fetchAllCuisines();

  console.log(restaurants);
  console.log(locations);
  console.log(cuisines);
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3  justify-between items-start">
        <SearchSidebar locations={locations} cuisines={cuisines} />
        <div className="w-5/6 ml-5">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <ServiceCard restaurant={restaurant} key={restaurant.id} />
              ))}
            </>
          ) : (
            <h1 className="text-2xl font-bold mb-2">
              No Restaurants in {searchParams.city}!
            </h1>
          )}
        </div>
      </div>
    </>
  );
}
