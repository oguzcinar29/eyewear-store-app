import { ArrowDown } from "lucide-react";
import SingleProduct from "../SingleProduct";

export default function GenderProducts({ total, category, products }: any) {
  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-between">
        <span>
          Showing all {category === "men" ? total.men : total.women} results
        </span>
        <span className="flex gap-3">
          Default sorting <ArrowDown />
        </span>
      </div>
      <div className="flex flex-wrap gap-6  mt-5">
        {products.map((item: any) => {
          if (item.category === category.toUpperCase()) {
            return <SingleProduct key={item._id} {...item} />;
          }
        })}
      </div>
    </div>
  );
}
