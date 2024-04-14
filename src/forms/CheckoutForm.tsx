import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext, useState } from "react";
import { getNames } from "country-list";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { LockIcon } from "lucide-react";
import { StateContext } from "@/components/Context/ProductsContext";

const formSchema = z.object({
  username: z.string().min(2, { message: "Field is required." }).max(50),
  firstName: z.string().min(2, { message: "Field is required." }).max(50),
  lastName: z.string().min(2, { message: "Field is required." }).max(50),
  company: z.string(),
  street: z.string().min(2, { message: "Field is required." }).max(50),
  apartment: z.string(),
  city: z.string().min(2, { message: "Field is required." }).max(50),
  state: z.string().min(2, { message: "Field is required." }).max(50),
  zip: z.string().min(2, { message: "Field is required." }).max(50),
  phone: z.string().min(2, { message: "Field is required." }).max(50),
  note: z.string(),
});

export default function CheckoutForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      company: "",
      street: "",
      apartment: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      note: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [country, setCountry] = useState<string>("");
  const [isCouponClicked, setCouponClicked] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("");
  const { card } = useContext(StateContext)!;

  const getCardTotal = () => {
    let total = 0;
    card.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-10">
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-bold text-xl mb-2">Customer Information</h3>
              <Separator />
            </div>

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-500 font-semibold tracking-wider text-base">
                    Username or Email Address
                    <span className="text-red-500 pl-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="rounded-none text-base" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-bold text-xl mb-2">Billing Details</h3>
              <Separator />
            </div>
            <div className="flex gap-3 ">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-slate-500 font-semibold tracking-wider text-base">
                      First Name
                      <span className="text-red-500 pl-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input className=" rounded-none text-base " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-slate-500 font-semibold tracking-wider text-base">
                      Last Name
                      <span className="text-red-500 pl-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input className="rounded-none text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-slate-500 font-semibold tracking-wider text-base">
                    Company Name (optinal)
                    <span className="text-red-500 pl-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="rounded-none text-base" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2">
              <Label className="text-slate-500 font-semibold tracking-wider text-base">
                Country / Region
                <span className="text-red-500 pl-1">*</span>
              </Label>
              <Select onValueChange={(value) => setCountry(value)}>
                <SelectTrigger className="rounded-none">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  {getNames().map((item: string, indx: number) => {
                    return (
                      <SelectItem value={item} key={indx}>
                        {item}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-3">
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-slate-500 font-semibold tracking-wider text-base">
                      Street Address
                      <span className="text-red-500 pl-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input className="rounded-none text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="apartment"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-slate-500 font-semibold tracking-wider text-base">
                      Apartment, suite, unit, etc. (optional)
                      <span className="text-red-500 pl-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input className="rounded-none text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-3">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-slate-500 font-semibold tracking-wider text-base">
                      Town / City
                      <span className="text-red-500 pl-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input className="rounded-none text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-slate-500 font-semibold tracking-wider text-base">
                      State
                      <span className="text-red-500 pl-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input className="rounded-none text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-slate-500 font-semibold tracking-wider text-base">
                      ZIP Code
                      <span className="text-red-500 pl-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="string"
                        className="rounded-none text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-slate-500 font-semibold tracking-wider text-base">
                    Phone
                    <span className="text-red-500 pl-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="string"
                      className="rounded-none text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-bold text-xl mb-2">Additional information</h3>
              <Separator />
            </div>

            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-500 font-semibold tracking-wider text-base">
                    Order notes (optional)
                    <span className="text-red-500 pl-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea className="rounded-none text-base" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span
              onClick={() => setCouponClicked(true)}
              className={
                isCouponClicked ? "hidden" : " text-slate-500 cursor-pointer "
              }
            >
              Have a coupon?
            </span>
            <div className={isCouponClicked ? "flex gap-2   " : "hidden"}>
              <Input
                className="rounded-none"
                value={coupon}
                onChange={(e: any) => setCoupon(e.target.value)}
                type="text"
                placeholder="Coupon code"
              />
              <Button
                onClick={() => {
                  toast.error(`Coupon "${coupon}" does not exist!`);
                  setCoupon("");
                }}
                variant={"outline"}
                className="rounded-none border border-black font-bold text-base"
              >
                APPLY
              </Button>
            </div>
          </div>

          <Button
            className="mt-5 w-full border rounded-none tracking-wider border-black text-base font-semibold min-h-14 flex  items-center gap-3"
            variant={"outline"}
            type="submit"
          >
            <LockIcon color="black" />
            <span>
              PLACE ORDER $
              {getCardTotal()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              .00
            </span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
