import React from "react";
import TableHeader from "./TableHeader";

function ProductTable() {
  return (
    <div className="py-7 px-12">
      <div className="p-5 mb-3 text-xl font-semibold">Department List.</div>
      <TableHeader />
      <div className="bg-white rounded-3xl w-full h-screen mt-5 shadow-md"></div>
    </div>
  );
}

export default ProductTable;
