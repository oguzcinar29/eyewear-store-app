import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { StateContext } from "../Context/ProductsContext";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function CartTools() {
  const { card } = useContext(StateContext)!;

  const [isCouponClicked, setCouponClicked] = useState<boolean>(false);

  const [coupon, setCoupon] = useState<string>("");

  const getCardTotal = () => {
    let total = 0;
    card.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <div className="border flex flex-col gap-3  ">
      <div className="bg-gray-100  px-5 py-2">
        <h2 className="font-black text-2xl second-font">Cart Totals</h2>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="py-4 flex justify-between px-2">
          <span className="text-slate-500 font-medium">Subtotal</span>
          <span className="text-slate-500 font-medium">
            $
            {getCardTotal()
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            .00
          </span>
        </div>
        <Separator />
        <div className="py-4  flex justify-between px-2">
          <span className="text-slate-500 font-medium">Total</span>
          <span className="text-slate-500 font-medium">
            $
            {getCardTotal()
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            .00
          </span>
        </div>
        <Separator />
      </div>
      <span
        onClick={() => setCouponClicked(true)}
        className={
          isCouponClicked ? "hidden" : "px-5 text-slate-500 mt-5 cursor-pointer"
        }
      >
        Have a coupon?
      </span>
      <div className={isCouponClicked ? "flex gap-2 mt-5 px-5 " : "hidden"}>
        <Input
          className="rounded-none"
          value={coupon}
          onChange={(e: any) => setCoupon(e.target.value)}
          type="text"
          placeholder="Coupon code"
        />
        <Button
          onClick={() => {
            toast.error(`Coupon "${coupon}" does not exist!`);
            setCoupon("");
          }}
          variant={"outline"}
          className="rounded-none"
        >
          APPLY
        </Button>
      </div>

      <Link
        className=" border rounded-none min-h-16 text-center flex justify-center items-center border-black  text-black font-bold text-lg  w-[88%] max-2xl:text-sm  mx-auto mb-7"
        to="/checkout"
      >
        PROCEED TO CHECKOUT
      </Link>
    </div>
  );
}
