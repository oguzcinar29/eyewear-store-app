import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBasket } from "lucide-react";

export default function Cart() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center gap-3 font-black">
            <span className="max-xl:hidden">$483.00</span>
            <div className="relative">
              <ShoppingBasket />
              <span className="absolute  w-7 h-7 text-center font-medium   -top-4 -right-6 flex justify-center items-center bg-black text-white rounded-3xl">
                3
              </span>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
