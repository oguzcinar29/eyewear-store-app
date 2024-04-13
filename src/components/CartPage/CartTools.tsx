import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// i was here
export default function CartTools() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100 border">
            <TableHead className="font-bold text-2xl text-black second-font  min-w-[200px] ">
              Cart Totals
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
