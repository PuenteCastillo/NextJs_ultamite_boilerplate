import Link from "next/link";

export default function ServiceNavBar({ slug }: { slug: string }) {
  return (
    <>
      {/* RESAURANT NAVBAR */}
      <nav className="flex text-reg border-b pb-2">
        <Link href={`/serviceprovider/${slug}`} className="mr-7">
          Overview
        </Link>
        <Link href={`/serviceprovider/${slug}/services`} className="mr-7">
          Menu
        </Link>
      </nav>
      {/* RESAURANT NAVBAR */}
    </>
  );
}
