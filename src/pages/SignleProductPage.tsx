import SingleProductComponent from "@/components/SingleProductPage/SingleProductComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function SignleProductPage() {
  const [product, setProduct] = useState<any>({});
  const { id } = useParams();
  const [prevProduct, setPrevProduct] = useState<any>();

  const [nextProduct, setNextProduct] = useState<any>();

  const getProduct = async () => {
    try {
      const res = await fetch(
        `${API_URL}/api/products/get-single-product/${id}`,
        {
          method: "GET",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch single product");
      } else {
        const data = await res.json();

        setProduct(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getNextAndPrevProduct = async () => {
    try {
      const res = await fetch(
        `${API_URL}/api/products/get-prev-next-product/${id}`,
        {
          method: "GET",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch next prev product");
      } else {
        const data = await res.json();
        setPrevProduct(data.prevProduct);
        setNextProduct(data.nextProduct);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProduct();
    getNextAndPrevProduct();
  }, [id]);
  return (
    <div className="w-[70%] mx-auto my-20 max-lg:w-[88%]">
      <SingleProductComponent
        nextProduct={nextProduct}
        prevProduct={prevProduct}
        item={product}
        {...product}
      />
    </div>
  );
}
