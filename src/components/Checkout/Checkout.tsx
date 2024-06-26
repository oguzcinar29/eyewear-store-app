import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import CheckoutForm from "@/forms/CheckoutForm";
import CheckoutOrder from "./CheckoutOrder";

export default function Checkout() {
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-5 mt-20 max-lg:w-full max-lg:px-7 ">
      <div className="text-left max-sm:text-center">
        <h2 className="font-thin text-4xl second-font">Checkout</h2>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button
          variant={"ghost"}
          asChild
          className="hover:bg-white text-slate-300 flex gap-2 max-xl:hidden hover:text-black"
        >
          <Link to="/cart">
            <span className="bg-slate-300 p-3 w-7 h-7 flex justify-center items-center text-center text-white rounded-[50%]">
              1
            </span>
            <span className="font-semibold text-xl hover:text-black text-slate-300  transition">
              SHOPPING CART
            </span>
          </Link>
        </Button>
        <ChevronRight className="text-slate-300 max-xl:hidden" />
        <Button
          variant={"ghost"}
          asChild
          className="hover:bg-white  flex gap-2"
        >
          <Link to="/checkout" className="hover:text-black ">
            <span className="bg-black p-3 w-7 h-7 flex justify-center items-center text-center text-white rounded-[50%]">
              2
            </span>
            <span className="font-semibold text-xl hover:bg-white ">
              CHECKOUT DETAILS
            </span>
          </Link>
        </Button>
        <ChevronRight className="text-slate-300 max-xl:hidden" />
        <Button
          variant={"ghost"}
          asChild
          className="hover:bg-white text-slate-300 flex max-xl:hidden  gap-2"
        >
          <div className="cursor-default">
            <span className="bg-slate-300 p-3 w-7 h-7 flex justify-center items-center text-center text-white rounded-[50%]">
              3
            </span>
            <span className="font-semibold text-xl  text-slate-300">
              ORDER COMPLETE
            </span>
          </div>
        </Button>
      </div>
      <div className="flex gap-10 my-5 mb-16 max-xl:flex-col max-xl:gap-16">
        <div className="w-3/5 max-xl:w-full ">
          <CheckoutForm />
        </div>
        <div className="w-2/5 max-xl:w-full ">
          <CheckoutOrder />
        </div>
      </div>
    </div>
  );
}
