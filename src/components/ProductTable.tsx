import React, { useEffect } from "react";
import { useProductContext } from "../context/productContext";
// import TableHeadContainer from "./TableHeader";
import TableRows from "./TableRow";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { toast } from "sonner";

interface Product {
  SKU: number;
  Name: string;
  Description: string;
  Brand: string;
  Title: string;
  Gender: string;
  RETAIL: number;
  "Cost Price": number;
  Image_1: string;
  URL: string;
  Quantity: number;
  size: string;
  UPC: null | string;
  catalog_time: string;
  supplier: string;
}

function ProductTable() {
  const tableHeaders = [
    { title: "S/N", className: "w-[50px] py-2" },
    { title: "Image", className: "w-[100px] py-2" },
    { title: "SKU", className: "w-[100px] py-2" },
    { title: "Name", className: "w-[100px] py-2" },
    { title: "Title", className: "w-[400px] py-2 text-center" },
    { title: "Description", className: "w-[400px] py-2 " },
    { title: "Brand", className: "w-[200px] py-2" },
    { title: "Cost price", className: "w-[100px] py-2" },
    { title: "Quantity", className: "w-[100px] py-2" },
    { title: "Size", className: "w-[100px] py-2" },
  ];
  const { products, loading, searchTerm, error } = useProductContext();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  const filteredProducts = products.filter((product: Product) =>
    product.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-7 px-12 relative w-full overflow-auto">
      <div className="p-5 mb-3 text-xl font-semibold">Department List.</div>
      <Table>
        <TableHeader className="mb-5">
          <TableRow>
            {tableHeaders.map((header) => (
              <TableHead key={header.title} className={header.className}>
                {header.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="mt-5 shadow-md bg-white rounded-3xl">
          {loading
            ? Array(10)
                .fill(0)
                .map((_, index) => (
                  <TableRows key={index} index={index} loading={true} />
                ))
            : filteredProducts.map((product: Product, index: number) => (
                <TableRows
                  key={product.SKU}
                  product={product}
                  index={index}
                  loading={false}
                />
              ))}
        </TableBody>
        <TableCaption>Department list.</TableCaption>
      </Table>
      {/* <div className="text-red-500">{error}</div> */}
    </div>
  );
}

export default ProductTable;
