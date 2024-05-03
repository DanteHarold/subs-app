import Link from "next/link";
import React from "react";

const menuItems = [
  {
    title: "Agregar Subscripcion",
    path: "/dashboard/add-subs",
  },
  {
    title: "Listar Subscripciones",
    path: "/dashboard/list-subs",
  },
];

export const TopMenu = () => {
  return (
    <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
      {menuItems.map((menu) => (
        <Link
          className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href={menu.path}
        >
          {menu.title}
        </Link>
      ))}
    </nav>
  );
};
