import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function TakeCare() {
  return (
    <div>
      <div className="flex gap-52 container items-center max-lg:gap-20 mb-10 max-md:flex-col max-sm:gap-2">
        <div className="w-2/5 max-md:pt-32 flex flex-col gap-5 h-[calc(100vh-20vh)] justify-center max-sm:p-0  px-[32px] mx-10 max-lg:mx-0  max-xl:w-full max-xl:h-96">
          <span className="font-bold text-base">Heading Text Here</span>
          <h1 className="second-font max-xl:text-4xl max-sm:text-4xl text-7xl font-black tracking-wide">
            How to take care of your eyewear
          </h1>
          <p className="text-slate-500  tracking-widest">
            Curabitur neque ex, facilisis id venenatis in, tincidunt at augue.
            Etiam lobortis commodo tristique. Aliquam convallis pulvinar
            facilisis.
          </p>
          <Button
            className="border-black border rounded-none font-bold w-36"
            variant={"ghost"}
          >
            <Link to="/">READ MORE</Link>{" "}
          </Button>
        </div>
        <div>
          <img
            src="https://websitedemos.net/eyewear-store-04/wp-content/uploads/sites/1121/2022/09/bg-03.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
