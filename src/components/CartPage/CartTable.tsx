import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useContext, useState } from "react";
import { StateContext } from "../Context/ProductsContext";
import { Minus, Plus, XCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import MobileCartTable from "./MobileCartTable";

const API_URL = import.meta.env.VITE_API_BASE_URL;

// change the increase and decrease buttons they have to wait 1 sec.

export default function CartTable() {
  const { card, setCard } = useContext(StateContext)!;
  const [loading, setLoading] = useState(false);
  const deleteProduct = async (_id: any) => {
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
  const changeQuantity = async (type: any, _id: any) => {
    const guestId = JSON.parse(window.localStorage.getItem("guestId") || "[]");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
    <>
      <div className="max-lg:hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 border">
              <TableHead className="w-[400px] text-center font-semibold text-lg">
                Product
              </TableHead>
              <TableHead className="font-semibold text-lg">Price</TableHead>
              <TableHead className="font-semibold text-lg">Quantity</TableHead>
              <TableHead className="font-semibold text-lg">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {card.map((item: any) => {
              return (
                <TableRow key={item._id}>
                  <TableCell className="font-medium text-center flex items-center gap-8">
                    <XCircle
                      onClick={() => deleteProduct(item._id.toString())}
                      className="cursor-pointer text-slate-300"
                    />
                    <img
                      className="w-20 h-20"
                      src={item.images[0]}
                      alt="glasses image"
                    />
                    <span className="font-medium text-lg">{item.name}</span>
                  </TableCell>
                  <TableCell className="text-slate-500 font-thin text-base">
                    ${item.price}.00
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {loading ? (
                        <Button
                          disabled
                          variant={"ghost"}
                          className="bg-white border border-gray-300 rounded-none"
                          size={"icon"}
                        >
                          <Minus />
                        </Button>
                      ) : (
                        <Button
                          onClick={() =>
                            changeQuantity("dec", item._id.toString())
                          }
                          className="bg-white border border-gray-300 rounded-none"
                          variant={"ghost"}
                          size={"icon"}
                        >
                          <Minus />
                        </Button>
                      )}
                      <Button
                        className="bg-white border hover:bg-white cursor-default border-gray-300 rounded-none"
                        variant={"ghost"}
                        size={"icon"}
                      >
                        {item.quantity}
                      </Button>
                      {loading ? (
                        <Button
                          disabled
                          variant={"ghost"}
                          className="bg-white border border-gray-300 rounded-none"
                          size={"icon"}
                        >
                          <Plus />
                        </Button>
                      ) : (
                        <Button
                          onClick={() =>
                            changeQuantity("inc", item._id.toString())
                          }
                          className="bg-white border border-gray-300 rounded-none"
                          variant={"ghost"}
                          size={"icon"}
                        >
                          <Plus />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-500 font-medium text-base">
                    $
                    {(item.price * item.quantity)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    .00
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-4 lg:hidden">
        {card.map((item: any) => {
          return <MobileCartTable {...item} key={item._id} />;
        })}
      </div>
    </>
  );
}
