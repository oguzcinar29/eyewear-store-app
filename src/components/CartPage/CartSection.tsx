import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import CartTable from "./CartTable";
import CartTools from "./CartTools";

export default function CartSection() {
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-5 mt-20">
      <div className="text-left">
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
        <ArrowRight className="text-slate-300" />
        <Button
          variant={"ghost"}
          asChild
          className="hover:bg-white text-slate-300 flex gap-2 hover:text-black"
        >
          <Link to="/" className="hover:text-black ">
            <span className="bg-black p-3 w-7 h-7 flex justify-center items-center text-center text-white rounded-[50%]">
              2
            </span>
            <span className="font-semibold text-xl hover:text-black text-slate-300  transition   ">
              CHECKOUT DETAILS
            </span>
          </Link>
        </Button>
        <ArrowRight className="text-slate-300" />
        <Button
          variant={"ghost"}
          asChild
          className="hover:bg-white text-slate-300 flex  gap-2"
        >
          <div className="cursor-default">
            <span className="bg-black p-3 w-7 h-7 flex justify-center items-center text-center text-white rounded-[50%]">
              3
            </span>
            <span className="font-semibold text-xl  text-slate-300">
              ORDER COMPLETE
            </span>
          </div>
        </Button>
      </div>
      <div className="flex gap-10 my-5 mb-16">
        <div className="w-3/4">
          <CartTable />
        </div>

        <div className="w-1/4 ">
          <CartTools />
        </div>
      </div>
    </div>
  );
}
