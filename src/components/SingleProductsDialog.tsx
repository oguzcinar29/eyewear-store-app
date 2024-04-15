import { SingleProductProps } from "./SingleProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { StateContext } from "./Context/ProductsContext";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function SingleProductsDialog({
  images,
  name,
  price,
  item,
  category,
}: SingleProductProps) {
  const [loading, setLoading] = useState(false);

  const { setCard } = useContext(StateContext)!;
  const addToCart = async () => {
    if (window.localStorage.getItem("guestId") === null) {
      console.log("hey");
      const id = nanoid(48);
      window.localStorage.setItem("guestId", JSON.stringify(id));
    }

    const guestId = JSON.parse(window.localStorage.getItem("guestId") || "[]");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    try {
      const res = await fetch(`${API_URL}/api/card/add-to-card`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ item, guestId }),
      });
      if (!res.ok) {
        throw new Error("Failed to add to card");
      } else {
        const data = await res.json();

        setCard(data);
        toast.success("İtem added to card");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex ">
      <div className="w-1/2 p-0">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img className="max-w-full max-h-full" src={images[0]} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img className="max-w-full max-h-full" src={images[1]} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img className="max-w-full max-h-full" src={images[2]} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
      <div className=" w-1/2 px-7 flex flex-col gap-3 justify-between">
        <div className="sticky h-[360px] overflow-y-scroll flex flex-col gap-3">
          <span className="text-slate-500 tracking-wider text-lg">
            {category}
          </span>
          <h2 className="text-3xl font-black">{name}</h2>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black">${price} </span>
            <span className="text-slate-500 tracking-wider">
              {" "}
              & Free Shipping
            </span>
          </div>
          <p className="text-slate-500 tracking-wider leading-7 flex flex-col gap-1 ">
            Ut non elit lorem. Duis pharetra odio vitae nisl luctus, at volutpat
            arcu lacinia. Aliquam id ullamcorper augue. Fusce feugiat nibh et
            nisl mollis hendrerit. Mauris sit amet nulla in augue laoreet
            lobortis ac eleifend nunc. Quisque eleifend sollicitudin nulla, et
            consequat eros. Donec pellentesque dapibus massa ut cursus.
            <span className="mt-5">
              Quisque ut augue eu dui semper eleifend. Aliquam imperdiet nisl
              libero, vitae vulputate lectus fringilla eget.
            </span>
          </p>
          <Separator />
          <span className="text-slate-500 tracking-wider">
            Category: <b className="text-black">{category}</b>
          </span>
        </div>
        <div className="flex gap-5 items-center">
          {loading ? (
            <Button
              disabled
              variant={"ghost"}
              className="border border-black rounded-none font-bold"
            >
              ADD TO CART
            </Button>
          ) : (
            <Button
              onClick={addToCart}
              className="border border-black rounded-none font-bold"
              variant={"ghost"}
            >
              ADD TO CART
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
