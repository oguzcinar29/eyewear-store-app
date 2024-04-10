import AboutUs from "@/components/AboutUs/AboutUs";
import OurVision from "@/components/AboutUs/OurVision";
import DummyBoxes from "@/components/Home/DummyBoxes";

export default function AboutUsPage() {
  return (
    <div>
      <AboutUs />
      <div className="bg-about-dummy-bg h-[calc(100vh-20vh)] bg-no-repeat bg-cover bg-center"></div>
      <OurVision />
      <DummyBoxes />
    </div>
  );
}
