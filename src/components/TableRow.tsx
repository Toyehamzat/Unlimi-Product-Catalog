import { TableCell, TableRow } from "../components/ui/table";
import { RiCheckboxBlankLine } from "react-icons/ri";
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

interface TableRowProps {
  product?: Product;
  index: number;
  loading: boolean;
}

function SkeletonCell() {
  return (
    <TableCell className="py-4">
      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
    </TableCell>
  );
}

function TableRows({ product, index, loading }: TableRowProps) {
  if (loading) {
    return (
      <TableRow className="px-2 py-4 bg-white">
        <SkeletonCell />
        <TableCell className="py-4">
          <div className="w-12 h-12 bg-gray-200 rounded animate-pulse"></div>
        </TableCell>
        <SkeletonCell />
        <SkeletonCell />
        <SkeletonCell />
        <SkeletonCell />
        <SkeletonCell />
        <SkeletonCell />
        <SkeletonCell />
        <SkeletonCell />
      </TableRow>
    );
  }

  if (!product) return null;

  return (
    <TableRow className="px-2  bg-white rounded-md">
      <TableCell>
        <div className="flex flex-row  gap-2 justify-center align-middle">
          <RiCheckboxBlankLine size={20} color="grey" />
          {index + 1}.
        </div>
      </TableCell>
      <TableCell>
        <img src={product.Image_1} alt={product.Name} width={50} />
      </TableCell>
      <TableCell>{product.SKU}</TableCell>
      <TableCell>{product.Name}</TableCell>
      <TableCell>{product.Title}</TableCell>
      <TableCell>{product.Description}</TableCell>
      <TableCell>{product.Brand}</TableCell>
      <TableCell>{product["Cost Price"]}</TableCell>
      <TableCell>{product.Quantity}</TableCell>
      <TableCell>{product.size}</TableCell>
    </TableRow>
  );
}

export default TableRows;
