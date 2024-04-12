import SingleProduct from "../SingleProduct";
import SelectProducts from "./SelectProducts";

export default function GenderProducts({ total, category, products }: any) {
  return (
    <div className="container mx-auto  my-16">
      <div className="flex justify-between text-slate-500 mt-32">
        <span className="tracking-widest">
          Showing all {category === "men" ? total.men : total.women} results
        </span>

        <SelectProducts />
      </div>
      <div className="flex flex-wrap gap-6  ">
        {products.map((item: any) => {
          if (item.category === category.toUpperCase()) {
            return <SingleProduct key={item._id} {...item} />;
          }
        })}
      </div>
    </div>
  );
}
