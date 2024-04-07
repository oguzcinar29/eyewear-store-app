import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <>
      <nav className="flex absolute  w-full justify-between max-xl:hidden items-center py-5 px-10">
        <div className="w-1/3 flex gap-8  tracking-widest font-semibold  cursor-pointer">
          <Link to="/" className="hover:text-slate-600">
            HOME
          </Link>
          <Link to="/" className="hover:text-slate-600">
            WOMEN
          </Link>
          <Link to="/" className="hover:text-slate-600">
            MEN
          </Link>
          <Link to="/" className="hover:text-slate-600">
            ABOUT US
          </Link>
          <Link to="/" className="hover:text-slate-600">
            CONTACT
          </Link>
        </div>
        <Link className="flex flex-col text-center" to="/">
          <img src="https://websitedemos.net/eyewear-store-04/wp-content/uploads/sites/1121/2022/09/logo-header-regular.png" />
        </Link>
        <div className="flex w-1/3 text-right justify-end gap-12 items-center">
          <Cart />
          <Link className="text-black font-medium" to="/log-in">
            LOG IN
          </Link>
        </div>
      </nav>
      <MobileNav />
    </>
  );
}
