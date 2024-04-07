import BeDifferentHome from "@/components/Home/BeDifferentHome";
import DummyBoxes from "@/components/Home/DummyBoxes";
import FewWords from "@/components/Home/FewWordsHome";
import TakeCare from "@/components/Home/TakeCare";
import Testimonials from "@/components/Home/Testimonials";
import TrendProducts from "@/components/Home/TrendProducts";

export default function HomePage() {
  return (
    <div>
      <FewWords />
      <BeDifferentHome />
      <Testimonials />
      <TakeCare />
      <TrendProducts />
      <DummyBoxes />
    </div>
  );
}
