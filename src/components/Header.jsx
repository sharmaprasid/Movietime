import MenuItem from "./MenuItem";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-3  ">
      <div className="flex items-center ">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={160}
            height={160}
            className="py-1 px-2"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <DarkMode />
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
    </div>
  );
};

export default Header;
