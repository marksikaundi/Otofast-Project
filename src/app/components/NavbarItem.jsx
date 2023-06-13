import Link from "next/link";

export default function NavbarItem({ title, address }) {
  return (
    <div className="">
      <Link className="mx-4 lg:mx-6 hover:text-amber-600" href={address}>
    
        <p className="sm:inline p-2 my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}