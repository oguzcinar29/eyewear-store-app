import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Link } from "react-router-dom";
import Images from "./Images";
import { useContext, useState } from "react";
import { StateContext } from "../Context/ProductsContext";
import { nanoid } from "nanoid";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
type Props = {
  images: Array<string>;
  name: string;
  price: number;
  description: string;
  category: string;
  color: string;
  size: string;
  nextProduct: any;
  prevProduct: any;
  item: any;
};
const API_URL = import.meta.env.VITE_API_BASE_URL;
export default function SingleProductComponent({
  images,
  name,
  price,
  description,
  category,
  color,
  size,
  nextProduct,
  prevProduct,
  item,
}: Props) {
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
  console.log(color?.toLowerCase());
  const [temp, setTemp] = useState<boolean>(false);
  const [img2, setImg2] = useState<string>("");
  const [name2, setName2] = useState<string>("");
  const [price2, setPrice2] = useState<number>();
  return (
    <div>
      <div className="flex gap-10 max-lg:flex-col max-lg:gap-0  ">
        <div className="w-1/2 max-lg:w-full flex gap-3 h-[500px] cursor-pointer">
          <Images images={images} />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-medium tracking-wide ">
              {category?.toUpperCase()}
            </span>
            <div className="flex gap-3 ">
              <Link
                onMouseOver={() => {
                  setTemp(true);
                  setImg2(prevProduct?.images[0]);
                  setName2(prevProduct?.name);
                  setPrice2(prevProduct?.price);
                }}
                onMouseOut={() => setTemp(false)}
                to={`/product/${prevProduct?._id.toString()}`}
              >
                <ChevronLeft className="border  border-black hover:bg-black hover:text-white hover:transition-colors h-7 w-7" />
              </Link>
              <Link
                onMouseOver={() => {
                  setTemp(true);
                  setImg2(nextProduct?.images[0]);
                  setName2(nextProduct?.name);
                  setPrice2(nextProduct?.price);
                }}
                onMouseOut={() => setTemp(false)}
                to={`/product/${nextProduct?._id.toString()}`}
              >
                <ChevronRight className="border  border-black hover:bg-black hover:text-white hover:transition-colors h-7 w-7" />
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="font-black text-4xl second-font">{name}</span>
            {temp && (
              <div className="flex">
                <img src={img2} className="w-20 h-20" alt="" />
                <div className="flex flex-col gap-3 justify-center p-3">
                  <span>{name2}</span>
                  <span>${price}.00</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center">
            <span className="font-bold text-2xl mr-1">${price}.00 </span>{" "}
            <span className="text-gray-500 mt-1"> & Free Shipping</span>
          </div>
          <p className="leading-8 text-gray-500 font-thin text-lg">
            {description}
          </p>
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
          <Separator />
          <div className="flex justify-between items-center">
            <span>
              <span className="text-gray-500">Category: </span>{" "}
              <span className="font-semibold ">{category}</span>
            </span>
            <span>
              <span className="text-gray-500">Size: </span>{" "}
              <span className="font-semibold ">{size}</span>
            </span>
            <span>
              <span>Color: </span>
              <span
                className={`text-${
                  color && color?.toLowerCase()
                }-500 font-semibold`}
              >
                {color}
              </span>
            </span>
          </div>
          <Separator />
        </div>
      </div>
      <div className="mt-32">related prodcuts</div>
    </div>
  );
}
