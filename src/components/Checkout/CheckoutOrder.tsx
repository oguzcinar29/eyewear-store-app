import { useContext } from "react";
import { StateContext } from "../Context/ProductsContext";
import SingleCheckoutProduct from "./SingleCheckoutProduct";

export default function CheckoutOrder() {
  const { card } = useContext(StateContext)!;
  const getCardTotal = () => {
    let total = 0;
    card.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <div className="sticky top-10 ">
      <h3 className="font-bold text-xl">Your order</h3>
      <div className="border border-slate-100 mt-2 rounded-xl">
        <div className="border p-4 flex justify-between items-center text-slate-400">
          <span>Product</span>
          <span>Subtotal</span>
        </div>
        <div className="border border-slate-100">
          {card.map((item: any) => {
            return <SingleCheckoutProduct {...item} key={item._id} />;
          })}
        </div>
        <div className="border p-4 flex justify-between items-center text-slate-400 border-slate-100 border-t-0">
          <span>Product</span>
          <span>
            $
            {getCardTotal()
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            .00
          </span>
        </div>
        <div className="border p-4 flex justify-between items-center text-slate-600 font-semibold text-lg tracking-wider border-slate-100">
          <span>Total</span>
          <span>
            $
            {getCardTotal()
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            .00
          </span>
        </div>
      </div>
    </div>
  );
}
