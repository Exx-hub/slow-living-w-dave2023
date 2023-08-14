import Image from "next/image";
import Bars from "./icons/Bars";

function Navbar() {
  return (
    <nav className="p-5 flex justify-between items-center">
      <Image src="/dave-logo.png" alt="" width={80} height={40} />
      <Bars />
    </nav>
  );
}

export default Navbar;
