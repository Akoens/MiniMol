import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      
      <div className="hover:invert hover:animate-spin transition items-center gap-x-2 flex flex-col">
      <Image
          className="rounded-full invert hover:opacity-85  hover:bg-white hover:border-2"
          src="/logo.svg"
          alt="Logo"
          height={40}
          width={40}
        />
      </div>
    </Link>
  );
};