export default function AboutUs() {
  return (
    <div className="flex flex-col px-40 my-32 max-md:gap-5 max-md:px-6">
      <div className="w-3/4 max-md:w-full  ">
        <span className="font-bold">About us</span>
        <h1 className="text-8xl max-md:text-4xl second-font  font-black tracking-widest">
          We are an eyewear brand from Milan, Italy
        </h1>
      </div>
      <div className=" w-1/4 -mt-10 mr-10 max-md:w-3/4 max-md:-mr-5  max-md:mt-0      m-auto">
        <p className="text-slate-500  leading-[30px]  tracking-widest ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis
          sapien erat. Sed ornare lectus sit amet felis posuere, semper sodales
          risus iaculis. Sed quis sodales magna. Ut in efficitur leo. Proin vel
          commodo justo, vitae pellentesque enim. Curabitur ultrices fringilla
          cursus. Nulla sed laoreet risus.
        </p>
      </div>
    </div>
  );
}
