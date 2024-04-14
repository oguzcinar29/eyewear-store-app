import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import MobileLinks from "./MobileLinks";

export default function MobileNav() {
  return (
    <nav className="flex justify-between xl:hidden py-5 px-6 items-center">
      <Link to="/">
        <img
          src="https://websitedemos.net/eyewear-store-04/wp-content/uploads/sites/1121/2022/09/logo-header-regular.png"
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-10">
        <Cart />
        <MobileLinks />
      </div>
    </nav>
  );
}
