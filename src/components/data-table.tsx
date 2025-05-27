import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";

const invoices = [
  {
    productid: "9256822191-FE",
    type: "electronics",
    arrivaltime: "4/13/2015",
    weight: "25 KG",
    route: {
      from: "San Francisco",
      to: "New York",
    },
    status: "Delivered",
    fee: "$2000",
  },
  {
    productid: "9256822192-FE",
    type: "electronics",
    arrivaltime: "4/13/2015",
    weight: "25 KG",
    route: {
      from: "San Francisco",
      to: "New York",
    },
    status: "Delivered",
    fee: "$2000",
  },
  {
    productid: "9256822193-FE",
    type: "electronics",
    arrivaltime: "4/13/2015",
    weight: "25 KG",
    route: {
      from: "San Francisco",
      to: "New York",
    },
    status: "Delivered",
    fee: "$2000",
  },
  {
    productid: "9256822194-FE",
    type: "electronics",
    arrivaltime: "4/13/2015",
    weight: "25 KG",
    route: {
      from: "San Francisco",
      to: "New York",
    },
    status: "Delivered",
    fee: "$2000",
  },
  {
    productid: "9256822195-FE",
    type: "electronics",
    arrivaltime: "4/13/2015",
    weight: "25 KG",
    route: {
      from: "San Francisco",
      to: "New York",
    },
    status: "Delivered",
    fee: "$2000",
  },
  {
    productid: "9256822196-FE",
    type: "electronics",
    arrivaltime: "4/13/2015",
    weight: "25 KG",
    route: {
      from: "San Francisco",
      to: "New York",
    },
    status: "Delivered",
    fee: "$2000",
  },
  {
    productid: "9256822197-FE",
    type: "electronics",
    arrivaltime: "4/13/2015",
    weight: "25 KG",
    route: {
      from: "San Francisco",
      to: "New York",
    },
    status: "Delivered",
    fee: "$2000",
  },
];

export function DataTable() {
  return (
    <>
      <h1 className="text-xl font-medium p-2 mb-2">Tracking Order</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>PRODUCT ID</TableHead>
            <TableHead>TYPE</TableHead>
            <TableHead className="text-nowrap">ARRIVAL TIME</TableHead>
            <TableHead>WEIGHT</TableHead>
            <TableHead>ROUTE</TableHead>
            <TableHead>FEE</TableHead>
            <TableHead> STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.productid}>
              <TableCell className="py-4 text-nowrap">
                {invoice.productid}
              </TableCell>
              <TableCell className="py-4 ">
                <Badge variant={"muted"}>{invoice.type}</Badge>
              </TableCell>
              <TableCell className="py-4 text-nowrap">
                {invoice.arrivaltime}
              </TableCell>
              <TableCell className="py-4">{invoice.weight}</TableCell>
              <TableCell className="py-4 text-nowrap flex">
                {invoice.route.from} <ChevronRight /> {invoice.route.to}
              </TableCell>
              <TableCell className="py-4">{invoice.fee}</TableCell>
              <TableCell className="py-4">
                <Badge variant={"success"}>{invoice.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
