import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function OrderOkayPage() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-50vh)] flex-col gap-10">
      <h1 className="font-black text-7xl ">Order has been gotten</h1>
      <Button
        asChild
        variant={"outline"}
        className="text-lg border border-black"
      >
        <Link to="/product-category/women">Keep continue to shopping</Link>
      </Button>
    </div>
  );
}
