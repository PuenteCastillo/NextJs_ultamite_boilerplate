import Link from "next/link";

export default function ServiceNavBar() {
  return (
    <>
      {/* RESAURANT NAVBAR */}
      <nav className="flex text-reg border-b pb-2">
        <Link href="/serviceprovider/landscaping" className="mr-7">
          {" "}
          Overview{" "}
        </Link>
        <Link href="/serviceprovider/landscaping/services" className="mr-7">
          {" "}
          Menu{" "}
        </Link>
      </nav>
      {/* RESAURANT NAVBAR */}
    </>
  );
}
