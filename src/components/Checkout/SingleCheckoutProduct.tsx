import { Separator } from "../ui/separator";

type Props = {
  images: Array<string>;
  name: string;
  price: number;
};

export default function SingleCheckoutProduct({ images, name, price }: Props) {
  return (
    <>
      <div className="p-4 flex justify-between text-slate-400 items-center ">
        <div className="flex gap-3 items-center">
          <img className="w-16 h-16" src={images[0]} alt="" />
          <span>{name}</span>
        </div>
        <span>
          ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          .00
        </span>
      </div>
      <Separator />
    </>
  );
}
