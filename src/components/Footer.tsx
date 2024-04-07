import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#f1f1f1] pt-24 py-12">
      <div className="flex justify-between px-32 mb-20 max-lg:flex-col max-lg:justify-between max-lg:items-center max-lg:gap-10 max-lg:text-center">
        <div>
          <img
            src="https://websitedemos.net/eyewear-store-04/wp-content/uploads/sites/1121/2022/09/logo-footer-regular.png"
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold mb-3 text-2xl">ABOUT US</h2>
          <Link to="/">Home</Link>
          <Link to="/">Women</Link>
          <Link to="/">Men</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold mb-3 text-2xl">USEFUL LINKS</h2>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Refund Policy</Link>
          <Link to="/">Shipping Informations</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">FAQ's</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold mb-3 text-2xl">CONTACT</h2>
          <span className="text-slate-500">
            123 Fifth Avenue, New York, NY 10160
          </span>
          <span className="cursor-pointer">contact@info.com</span>
          <span className="text-slate-500">929-242-6868</span>
        </div>
      </div>
      <Separator />
      <div className="px-32 mt-10 flex justify-between items-center max-lg:flex-col max-lg:px-12 max-lg:text-center max-lg:gap-5">
        <span>
          {" "}
          Copyright &copy; 2024 Eyewear Store | Powered by{" "}
          <a
            className="font-bold"
            href="https://www.linkedin.com/in/oguz-orcin-cinar/"
          >
            Oguz Cinar
          </a>
        </span>
        <div className="flex gap-3 cursor-pointer">
          <Twitter />
          <Facebook />
          <Instagram />
        </div>
      </div>
    </div>
  );
}
