import { Minus, Plus, XCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useContext } from "react";
import { StateContext } from "../Context/ProductsContext";
import { toast } from "sonner";

type Props = {
  images: Array<string>;
  name: string;
  quantity: number;
  price: number;
  _id: string;
};

const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function SingleCart({
  images,
  name,
  quantity,
  price,
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
    <div>
      <div className="py-3 flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-20 h-20">
            <img src={images[0]} alt="eyeglass image" />
          </div>
          <div className="flex flex-col gap-1">
            <span>{name}</span>
            <div className="flex items-center justify-center">
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
        </div>
        <div className="flex flex-col gap-4 text-slate-400 justify-center items-end">
          <XCircle onClick={deleteProduct} className="cursor-pointer" />

          <span>${price * quantity}.00</span>
        </div>
      </div>
      <Separator />
    </div>
  );
}
