import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct";

const DATABASE_URI = import.meta.env.VITE_API_BASE_URL;

export default function TrendProducts() {
  const [products, setProducts] = useState<Array<any>>([]);
  const getProducts = async () => {
    try {
      const res = await fetch(`${DATABASE_URI}/api/products/get-products`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      } else {
        const data = await res.json();

        setProducts(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="text-center my-32">
        <span className="font-semibold text-sm">POPULAR PRODUCTS</span>
        <h1 className="second-font text-7xl max-lg:text-5xl font-black">
          Trending now
        </h1>
        <div className="flex gap-5 mt-5 max-lg:flex-col max-lg:gap-16 max-lg:justify-center max-lg:items-center justify-between">
          {products.map((item: any, index) => {
            if (index < 3) {
              return <SingleProduct {...item} key={item._id} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
