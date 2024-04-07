import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function FewWords() {
  return (
    <div className=" flex justify-between max-xl:flex-col max-xl:w-full max-sm:gap-10 my-5">
      <div className="w-1/3 flex flex-col gap-5 h-[calc(100vh-20vh)] justify-center  px-[32px] mx-10 max-xl:mx-0 max-xl:w-full max-xl:h-96">
        <span className="font-bold text-lg">TEXT HERE</span>
        <h1 className="second-font max-xl:text-4xl max-sm:text-4xl text-7xl font-black tracking-wide">
          A few words about us
        </h1>
        <p className="text-slate-500  tracking-widest">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <Button
          className="border-black border rounded-none font-bold w-36"
          variant={"ghost"}
        >
          <Link to="/">READ MORE</Link>{" "}
        </Button>
      </div>
      <div className="w-1/3 max-xl:hidden">
        <img
          src="https://websitedemos.net/eyewear-store-04/wp-content/uploads/sites/1121/2022/09/about-02.jpg"
          alt=""
        />
      </div>
      <div className="w-1/3 max-xl:hidden">
        <img
          src="https://websitedemos.net/eyewear-store-04/wp-content/uploads/sites/1121/2022/09/about-01.jpg"
          alt=""
        />
      </div>
      <div className="xl:hidden flex gap-3">
        <div className="w-1/3 max-xl:w-full">
          <img
            src="https://websitedemos.net/eyewear-store-04/wp-content/uploads/sites/1121/2022/09/about-02.jpg"
            alt=""
          />
        </div>
        <div className="w-1/3 max-xl:w-full">
          <img
            src="https://websitedemos.net/eyewear-store-04/wp-content/uploads/sites/1121/2022/09/about-01.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
