import { Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  images: Array<string>;
  name: string;
  price: number;
  _id: string;
};
export default function SingleProduct({ images, name, price, _id }: Props) {
  const [isMouseOver, setMouseOver] = useState<boolean>(false);
  return (
    <div className="flex flex-col w-[32%] ">
      <Link to={`/product/${_id}`}>
        <img
          onMouseLeave={() => {
            setMouseOver(false);
          }}
          onMouseOver={() => {
            setMouseOver(true);
          }}
          src={isMouseOver ? images[1] : images[0]}
          alt=""
        />
      </Link>
      <div className="flex flex-col justify-start items-start gap-2 mt-5 ml-3">
        <div className="flex gap-2">
          <Star className="text-orange-300" fill="orange" size={20} />
          <Star className="text-orange-300" fill="orange" size={20} />
          <Star className="text-orange-300" fill="orange" size={20} />
          <Star className="text-orange-300" fill="orange" size={20} />
          <Star size={20} />
        </div>
        <h2 className="font-black text-3xl second-font tracking-tighter">
          {name}
        </h2>
        <span className="font-semibold text-slate-500">${price}.00</span>
      </div>
    </div>
  );
}
