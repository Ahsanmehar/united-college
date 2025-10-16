// //pages/BlogPage/BlogTable/columns.jsx

import { Link } from "react-router-dom";

export const columns = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Link to={`/blog-detail/${row.original.id}`}>
        <img
          src={row.original.image}
          alt={row.original.title}
          className="w-full h-40 object-cover rounded-t-lg bg-gray-100"
        />
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Link
        to={`/blog-detail/${row.original.id}`}
        className="text-primary text-xs font-semibold uppercase tracking-wide hover:text-blue-800"
      >
        {row.getValue("category")}
      </Link>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link
        to={`/blog-detail/${row.original.id}`}
        className="text-lg font-bold hover:text-primary line-clamp-2"
      >
        {row.getValue("title")}
      </Link>
    ),
  },
  {
    accessorKey: "intro",
    header: "Introduction",
    cell: ({ row }) => (
      <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-3">
        {row.getValue("intro")}
      </p>
    ),
  },
];
