import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct";
import SelectProducts from "./SelectProducts";
import Skeleton from "../Skeleton";

export default function GenderProducts({ total, category, products }: any) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto  my-16">
      <div className="flex justify-between text-slate-500 mt-20">
        <span className="tracking-widest">
          Showing all {category === "men" ? total.men : total.women} results
        </span>

        <SelectProducts />
      </div>
      <div className="flex flex-wrap gap-[26px] max-lg:justify-center  ">
        {products.map((item: any) => {
          if (item.category === category.toUpperCase()) {
            if (loading) {
              return <Skeleton key={item._id} />;
            } else {
              return <SingleProduct key={item._id} item={item} {...item} />;
            }
          }
        })}
      </div>
    </div>
  );
}
