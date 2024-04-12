import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectProducts() {
  const sortProducts = async (value: any) => {
    window.localStorage.setItem("sort", JSON.stringify(value));
    window.location.reload();
  };
  return (
    <div className="">
      <Select
        defaultValue="default"
        onValueChange={(value: any) => sortProducts(value)}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Sort Products" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Sort Products</SelectItem>
          <SelectItem value="low">Sort by price:low to high</SelectItem>
          <SelectItem value="high">Sort by price:high to low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
