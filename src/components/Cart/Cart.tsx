import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBasket } from "lucide-react";
import { useContext } from "react";
import { StateContext } from "../Context/ProductsContext";
import { Separator } from "../ui/separator";
import SingleCart from "./SingleCart";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Cart() {
  const { card } = useContext(StateContext)!;

  const getCardTotal = () => {
    let total = 0;
    card.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center gap-3 font-black">
            <span className="max-xl:hidden font-black ">
              $
              {getCardTotal()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              .00
            </span>
            <div className="relative">
              <ShoppingBasket />
              <span className="absolute  w-7 h-7 text-center font-medium   -top-4 -right-5 flex justify-center items-center bg-black text-white rounded-3xl">
                {card.length}
              </span>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent className="bg-gray-100 min-w-[425px] max-sm:min-w-full ">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
            <Separator />
            {card.length !== 0 && (
              <div>
                <div className="flex flex-col sticky overflow-y-scroll h-[calc(100vh-30vh)] max-sm:h-[calc(100vh-43vh)] pr-3 ">
                  {card.map((item: any) => {
                    return <SingleCart {...item} key={item._id.toString()} />;
                  })}
                </div>
                <Separator />
                <div className="flex justify-between p-3 py-7">
                  <span className="font-semibold text-lg">Subtotal:</span>
                  <span className="text-slate-500 tracking-[1.5px]">
                    ${getCardTotal()}.00
                  </span>
                </div>
                <Separator />
                <div className="flex flex-col gap-5 p-3">
                  <SheetClose asChild>
                    <Button
                      className="font-semibold rounded-none border border-black text-base "
                      variant={"outline"}
                      asChild
                    >
                      <Link to="/cart">VIEW CART</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      className="font-semibold rounded-none border border-black text-base "
                      variant={"outline"}
                      asChild
                    >
                      <Link to="/checkout">CHECKOUT</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            )}
            {card.length === 0 && (
              <div className="flex flex-col  h-[calc(100vh-9vh)] justify-between text-center">
                <span className="relative top-80 text-gray-500 font-medium text-lg">
                  No products in the cart
                </span>
                <SheetClose asChild>
                  <Button
                    className="font-semibold rounded-none border border-black text-base "
                    variant={"outline"}
                  >
                    CONTINUE SHOPPING
                  </Button>
                </SheetClose>
              </div>
            )}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
