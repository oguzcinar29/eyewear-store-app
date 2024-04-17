import { useEffect, useState } from "react";
import GenderProducts from "./GenderProducts";
const DATABASE_URI = import.meta.env.VITE_API_BASE_URL;
export default function GenderPage({ category }: any) {
  const [products, setProducts] = useState<Array<any>>([]);
  const getProducts = async () => {
    const value = JSON.parse(window.localStorage.getItem("sort") || "[]");

    try {
      const res = await fetch(
        `${DATABASE_URI}/api/products/get-products?sort=${value}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
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
  }, [window.localStorage.getItem("sort")]);

  const getProductNumber = () => {
    let women = 0;
    let men = 0;
    products.forEach((item: any) => {
      if (item.category === "WOMEN") women++;
      if (item.category === "MEN") men++;
    });
    return { women, men };
  };
  return (
    <div className="my-16">
      <div className="container mx-auto flex flex-col gap-4 ">
        <span className="font-light text-slate-500">
          Home / {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
        <h1 className="text-8xl max-sm:text-7xl font-black second-font">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
      </div>
      <div>
        <GenderProducts
          total={getProductNumber()}
          category={category}
          products={products}
        />
      </div>
    </div>
  );
}
