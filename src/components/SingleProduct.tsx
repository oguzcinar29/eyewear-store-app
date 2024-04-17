import { EyeIcon, ShoppingBasketIcon, Star } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { nanoid } from "nanoid";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SingleProductsDialog from "./SingleProductsDialog";
import { StateContext } from "./Context/ProductsContext";
import { toast } from "sonner";
import { Button } from "./ui/button";

export type SingleProductProps = {
  images: Array<string>;
  name: string;
  price: number;
  _id: string;
  category: string;
  item: any;
};

const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function SingleProduct({
  images,
  name,
  price,
  item,
  _id,
  category,
}: SingleProductProps) {
  const { setCard } = useContext(StateContext)!;
  const [loading, setLoading] = useState(false);
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
        console.log(data);
        setCard(data);
        toast.success("İtem added to card");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [isMouseOver, setMouseOver] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-[32%] min-w-80 mt-10 ">
      <div
        className="relative text-center"
        onMouseLeave={() => {
          setMouseOver(false);
        }}
        onMouseOver={() => {
          setMouseOver(true);
        }}
      >
        <Link to={`/product/${_id}`}>
          <img
            className=""
            onClick={() => {
              window.scrollTo(0, 0);
              console.log("hey");
            }}
            src={isMouseOver ? images[1] : images[0]}
            alt=""
          />
        </Link>

        {isMouseOver && (
          <div className="absolute top-2 right-4  ">
            <div className=" flex flex-col gap-3">
              <TooltipProvider>
                <Tooltip>
                  {loading ? (
                    <Button
                      variant={"ghost"}
                      className="bg-slate-50 hover:bg-white text-center flex justify-center items-center text-black w-12 h-12 rounded-full"
                      disabled
                      onClick={addToCart}
                    >
                      <ShoppingBasketIcon size={20} />
                    </Button>
                  ) : (
                    <TooltipTrigger
                      onClick={addToCart}
                      className="bg-slate-50 hover:bg-white text-center flex justify-center items-center text-black w-12 h-12 rounded-full"
                    >
                      <ShoppingBasketIcon size={20} />
                    </TooltipTrigger>
                  )}
                  <TooltipContent>
                    <p>Add to cart</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Dialog>
                <DialogTrigger className="bg-slate-50 hover:bg-white text-center flex justify-center items-center text-black w-12 h-12 rounded-full">
                  <EyeIcon size={20} />
                </DialogTrigger>
                <DialogContent className="min-w-[900px]">
                  <DialogHeader>
                    <SingleProductsDialog
                      images={images}
                      name={name}
                      price={price}
                      item={item}
                      _id={_id}
                      category={category}
                    />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-start items-start gap-2 mt-5 ml-3">
        <div className="flex gap-2">
          <Star className="text-orange-300" fill="orange" size={20} />
          <Star className="text-orange-300" fill="orange" size={20} />
          <Star className="text-orange-300" fill="orange" size={20} />
          <Star className="text-orange-300" fill="orange" size={20} />
          <Star size={20} />
        </div>
        <h2 className="font-black text-3xl second-font tracking-tighter">
          {name}
        </h2>
        <span className="font-semibold text-slate-500">${price}.00</span>
      </div>
    </div>
  );
}
