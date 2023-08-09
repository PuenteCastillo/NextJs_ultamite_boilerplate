import Header from "../components/Header";
import ServiceNavBar from "../components/ServiceNavBar";
import Menu from "../components/Menu";
import { PrismaClient } from "@prisma/client";

//? data fetching ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const prisma = new PrismaClient();
const fetchRestaurantItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findMany({
    where: {
      slug: slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error("No items found");
  }

  return restaurant[0].items;
};
//? data fetching End ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//? page ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default async function services({
  params,
}: {
  params: { slug: string };
}) {
  const items = await fetchRestaurantItems(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <ServiceNavBar slug={params.slug} />
        {/* RESAURANT NAVBAR */}
        <Menu menu={items} />
      </div>
    </>
  );
}
//? page End ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
