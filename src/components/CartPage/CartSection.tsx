import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import CartTable from "./CartTable";
import CartTools from "./CartTools";

export default function CartSection() {
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-5 mt-20 max-lg:w-full max-lg:px-7 ">
      <div className="text-left max-sm:text-center">
        <h2 className="font-thin text-4xl second-font">Cart</h2>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button
          variant={"ghost"}
          asChild
          className="hover:bg-white  flex gap-2"
        >
          <Link to="/">
            <span className="bg-black p-3 w-7 h-7 flex justify-center items-center text-center text-white rounded-[50%]">
              1
            </span>
            <span className="font-semibold text-xl hover:bg-white ">
              SHOPPING CART
            </span>
          </Link>
        </Button>
        <ChevronRight className="text-slate-300 max-xl:hidden" />
        <Button
          variant={"ghost"}
          asChild
          className="hover:bg-white text-slate-300 flex gap-2 max-xl:hidden hover:text-black"
        >
          <Link to="/checkout" className="hover:text-black ">
            <span className="bg-slate-300 p-3 w-7 h-7 flex justify-center items-center text-center text-white rounded-[50%]">
              2
            </span>
            <span className="font-semibold text-xl hover:text-black text-slate-300  transition   ">
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
      <div className="flex gap-10 my-5 mb-16 max-xl:flex-col">
        <div className="w-3/4 max-xl:w-full ">
          <CartTable />
        </div>

        <div className="w-1/4 max-xl:w-full sticky top-0 ">
          <CartTools />
        </div>
      </div>
    </div>
  );
}
