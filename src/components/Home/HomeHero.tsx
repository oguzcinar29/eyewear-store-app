import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function HomeHero() {
  return (
    <div className="bg-center mt-20 bg-no-repeat bg-cover pt-10   max-h-screen bg-hero-bg  ">
      <div className="flex justify-center items-center relative text-start ">
        <img
          className=" object-contain"
          src="https://websitedemos.net/eyewear-store-04/wp-content/uploads/sites/1121/2022/09/hero-02.png"
          alt="eyewear"
        />
        <div className="absolute bottom-32 left-32 flex flex-col gap-5 w-96 max-sm:-bottom-32 max-sm:w-80 max-sm:left-8">
          <span className="font-bold text-lg">ORIGINAL SUNGLASSES</span>
          <h1 className="second-font max-sm:text-4xl text-8xl font-black tracking-wide">
            Original Sunglasses
          </h1>
          <p className="text-slate-500  tracking-widest">
            Fusce scelerisque tellus eget nisl vulputate, et eleifend sapien
            tempor nulla tristique.
          </p>
          <Button
            className="border-black border rounded-none font-bold w-36"
            variant={"ghost"}
          >
            <Link to="/">SHOP NOW</Link>{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
