import { useProductContext } from "../context/productContext";
import TableHeadContainer from "./TableHeader";
import TableRow from "./TableRow";

function ProductTable() {
  const { products, loading, searchTerm } = useProductContext();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="py-7 px-12 relative w-full overflow-auto">
      <div className="p-5 mb-3 text-xl font-semibold">Department List.</div>
      <table className="w-full text-sm">
        <TableHeadContainer />
        <tbody className="[&_tr:last-child]:border-0">
          {filteredProducts.map((product, index) => (
            <TableRow key={product.id} product={product} index={index} />
          ))}
        </tbody>
      </table>

      {/* <Table>
        <TableCaption>Department list.</TableCaption>
        <TableHeader className="mb-5">
          <TableRow>
            {tableHeaders.map((header) => (
              <TableHead
                key={header.title}
                className={header.width || header.className}
              >
                {header.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="mt-5 shadow-md bg-white rounded-3xl">
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-center">Credit Card</TableCell>
            <TableCell className="text-center">Credit Card</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
    </div>
  );
}

export default ProductTable;
