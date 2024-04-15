import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
export default function MobileLinks() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader>
            <div className="flex flex-col gap-5 text-center mt-10">
              <Link to="/" className="hover:text-black">
                HOME
              </Link>
              <Separator />
              <Link to="/product-category/women" className="hover:text-black">
                WOMEN
              </Link>
              <Separator />
              <Link to="/product-category/men" className="hover:text-black">
                MEN
              </Link>
              <Separator />
              <Link to="/about-us" className="hover:text-black">
                ABOUT US
              </Link>
              <Separator />
              <Link to="/contact" className="hover:text-black">
                CONTACT
              </Link>
              <Separator />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
