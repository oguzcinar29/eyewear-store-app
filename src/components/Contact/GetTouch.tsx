import ContactForm from "@/forms/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function GetTouch() {
  return (
    <div className="bg-slate-50">
      <div className="flex justify-between gap-20 w-4/5 max-lg:flex-col max-lg:container m-auto items-center  pt-32 pb-32 ">
        <div className="flex flex-col gap-5 w-1/2 max-lg:w-full">
          <h2 className="font-bold text-4xl ">Get in touch</h2>
          <p className="text-slate-500 tracking-widest leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
            tempor, congue justo at, lobortis orci.
          </p>
          <div className="flex items-center gap-1 underline cursor-pointer">
            <MapPin className="text-black" />
            <span>123 Fifth Avenue, New York, NY 10160</span>
          </div>
          <div className="flex items-center gap-1 underline cursor-pointer">
            <Mail className="text-black" />
            <span>contact@info.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="text-black" />
            <span>9-334-7565-9787</span>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
