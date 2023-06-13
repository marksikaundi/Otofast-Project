import Link from "next/link";

export default function NavbarItem({ title, address }) {
  return (
    <div className="">
      <Link className="mx-4 lg:mx-6 hover:text-amber-600" href={address}>
    
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}