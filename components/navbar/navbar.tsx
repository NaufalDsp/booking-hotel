import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/navbar/navlink";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-screen-xl mx-auto relative flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" width={128} height={49} alt="logo" priority />
        </Link>
        <NavLink />
      </div>
    </div>
  );
};

export default Navbar;
