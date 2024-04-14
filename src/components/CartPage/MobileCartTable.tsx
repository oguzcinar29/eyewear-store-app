import { Minus, Plus, XCircle } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useContext } from "react";
import { StateContext } from "../Context/ProductsContext";
import { toast } from "sonner";

type Props = {
  images: Array<string>;
  name: string;
  price: number;
  quantity: number;
  _id: string;
};

const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function MobileCartTable({
  images,
  name,
  price,
  quantity,
  _id,
}: Props) {
  const { setCard } = useContext(StateContext)!;

  const deleteProduct = async () => {
    console.log(_id);
    const guestId = JSON.parse(window.localStorage.getItem("guestId") || "[]");
    try {
      const res = await fetch(
        `${API_URL}/api/card/delete-card?productId=${_id}&guestId=${guestId}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to delete product");
      } else {
        const data = await res.json();
        setCard(data);
        toast.success("Product has been deleted.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeQuantity = async (type: any) => {
    const guestId = JSON.parse(window.localStorage.getItem("guestId") || "[]");

    try {
      const res = await fetch(`${API_URL}/api/card/change-quantity`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ type, guestId, productId: _id }),
      });
      if (!res.ok) {
        throw new Error("Failed to change quantity");
      } else {
        const data = await res.json();
        setCard(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center ">
        <img className="w-20 h-20" src={images[0]} alt="glasses image" />
        <XCircle
          onClick={deleteProduct}
          className="cursor-pointer text-slate-300"
        />
      </div>
      <Separator />
      <div className="flex justify-between items-center">
        <span>Product:</span>
        <span>{name}</span>
      </div>
      <Separator />
      <div className="flex justify-between items-center">
        <span>Price:</span>
        <span className="text-slate-500">${price}.00</span>
      </div>
      <Separator />
      <div className="flex justify-between items-center">
        <span>Quantity:</span>
        <div className="flex items-center ">
          <Button
            onClick={() => changeQuantity("dec")}
            className="bg-white border border-gray-300 rounded-none"
            variant={"ghost"}
            size={"icon"}
          >
            <Minus />
          </Button>
          <Button
            className="bg-white border hover:bg-white cursor-default border-gray-300 rounded-none"
            variant={"ghost"}
            size={"icon"}
          >
            {quantity}
          </Button>
          <Button
            onClick={() => changeQuantity("inc")}
            className="bg-white border border-gray-300 rounded-none"
            variant={"ghost"}
            size={"icon"}
          >
            <Plus />
          </Button>
        </div>
      </div>
      <Separator />
      <div className="flex justify-between items-center">
        <span>Subtotal:</span>
        <span className="text-slate-500">
          ${(quantity * price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          .00
        </span>
      </div>
    </div>
  );
}
