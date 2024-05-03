import { getSubs } from "@/helpers/subs";
import { NotContent } from "@/components/NotContent";
import React from "react";

export default async function ListSubsPage() {
  const subs = await getSubs();

  return (
    <>
      <div className=" max-w-5xl mx-auto my-24">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {subs!.length > 0 ? (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Apellido Paterno
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Apellido Materno
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Correo
                  </th>
                </tr>
              </thead>
              <tbody>
                {subs!.map((el) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">{el._id}</td>
                    <td className="px-6 py-4">{el.nombre}</td>
                    <td className="px-6 py-4">{el.apellidoPaterno}</td>
                    <td className="px-6 py-4">{el.apellidoMaterno}</td>
                    <td className="px-6 py-4">{el.correo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <NotContent />
          )}
        </div>
      </div>
    </>
  );
}
