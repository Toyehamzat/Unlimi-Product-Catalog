function TableHeader() {
  const tableHeaders = [
    { title: "S/N", width: "w-[50px] py-2" },
    { title: "Image", width: "w-[100px] py-2" },
    { title: "SKU", width: "w-[100px] py-2" },
    { title: "Name", width: "w-[100px] py-2", className: "text-right" },
    { title: "Title", width: "w-[400px] py-2" },
    {
      title: "Description",
      width: "w-[400px] py-2",
      className: "text-center",
    },
    { title: "Brand", width: "w-[200px] py-2" },
    { title: "Cost price", width: "w-[100px] py-2" },
    { title: "Quantity", width: "w-[100px] py-2" },
    { title: "Size", width: "w-[100px] py-2" },
  ];
  return (
    <thead className=" px-2 py-4 bg-blue-100/55 [&_tr]:border-b">
      <tr className=" px-2 py-4 ">
        {tableHeaders.map((header) => (
          <th key={header.title} className={header.width || header.className}>
            {header.title}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
