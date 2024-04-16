import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderOkayPage() {
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-10 mt-20 max-lg:w-full max-lg:px-7 ">
      <div className="text-left max-sm:text-center">
        <h2 className="font-thin text-4xl second-font">Checkout</h2>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button
          variant={"ghost"}
          asChild
          className="hover:bg-white text-slate-300 flex gap-2 max-xl:hidden"
        >
          <div>
            <span className="bg-slate-300 p-3 w-7 h-7 flex justify-center items-center text-center text-white rounded-[50%]">
              1
            </span>
            <span className="font-semibold text-xl  text-slate-300  transition">
              SHOPPING CART
            </span>
          </div>
        </Button>
        <ChevronRight className="text-slate-300 max-xl:hidden" />
        <Button
          variant={"ghost"}
          asChild
          className="hover:bg-white  flex gap-2 cursor-auto"
        >
          <div className="hover:text-black ">
            <span className="bg-slate-300 p-3 w-7 h-7 flex justify-center items-center text-center text-white rounded-[50%]">
              2
            </span>
            <span className="font-semibold text-xl hover:bg-white text-slate-300">
              CHECKOUT DETAILS
            </span>
          </div>
        </Button>
        <ChevronRight className="text-slate-300 max-xl:hidden" />
        <Button
          variant={"ghost"}
          asChild
          className="hover:bg-white text-slate-300 flex max-xl:hidden  gap-2"
        >
          <div className="cursor-default">
            <span className="bg-black p-3 w-7 h-7 flex justify-center items-center text-center text-white rounded-[50%]">
              3
            </span>
            <span className="font-semibold text-xl  text-black">
              ORDER COMPLETE
            </span>
          </div>
        </Button>
      </div>
      <div className=" flex flex-col gap-10 text-center justify-center items-center">
        <span className="text-lg font-semibold text-gray-400 tracking-wider">
          Thank you. Your order has been received.
        </span>
        <Button
          asChild
          variant={"outline"}
          className="text-lg font-bold w-60 flex justify-center items-center mb-10"
        >
          <Link to="/product-category/women">CONTINUE SHOPPING</Link>
        </Button>
      </div>
    </div>
  );
}
