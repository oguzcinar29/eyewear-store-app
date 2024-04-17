import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { StarIcon } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="h-[calc(100vh-30vh)] flex justify-center items-center my-32 max-lg:my-10 max-lg:h-[calc(100vh-5vh)] ">
      <div className="flex justify-center items-center flex-col w-2/5 mx-auto text-center gap-4 max-lg:w-full ">
        <div className="flex flex-col gap-2 text-center">
          <span className="font-bold text-lg">CLIENTS REVIEWS</span>
          <h1 className="second-font max-xl:text-4xl max-sm:text-4xl text-7xl font-black tracking-wide">
            Testimonials
          </h1>
        </div>
        <div className="flex flex-col gap-7 text-center justify-center items-center my-10">
          <div className="flex gap-1 text-orange-300">
            <StarIcon fill="orange" />
            <StarIcon fill="orange" />
            <StarIcon fill="orange" />
            <StarIcon fill="orange" />
            <StarIcon fill="orange" />
          </div>

          <p className="text-2xl text-black font-semibold italic leading-loose    tracking-widest">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <span className="text-slate-500">Jennifer Oliver</span>
        </div>
        <Button
          className="border-black border rounded-none font-bold w-36"
          variant={"ghost"}
        >
          <Link to="/">READ MORE</Link>{" "}
        </Button>
      </div>
    </div>
  );
}
