import Link from "next/link";
import { Location, Cuisine } from "@prisma/client";

export default async function SearchSidebar({
  locations,
  cuisines,
}: {
  locations: Location[];
  cuisines: Cuisine[];
}) {
  console.log(locations);
  console.log(cuisines);
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <div key={location.id}>
            <Link
              href={`/search?city=${location.name}`}
              className="font-light text-reg"
            >
              {location.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <div key={cuisine.id}>
            <Link
              href={`/search?cuisine=${cuisine.name}`}
              className="font-light text-reg"
            >
              {cuisine.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
