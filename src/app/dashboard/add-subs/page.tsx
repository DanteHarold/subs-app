"use client";
import Swal from "sweetalert2";
import { saveSubs, verifyEmail } from "@/helpers/subs";
import { Error } from "@/components/Error";
import { FormEvent, useState } from "react";

export default function AddSubsPage() {
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [correo, setCorreo] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);
  const handleCheckboxChange = () => {
    setTerms(!terms); // Invierte el estado actual
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      [nombre, apellidoPaterno, apellidoMaterno, correo].includes("") ||
      terms === false
    ) {
      setError(true);
      return;
    }

    const isDuplicatedEmail = await verifyEmail(correo);

    if (isDuplicatedEmail) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "El correo ingresado ya existe",
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      await saveSubs({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        correo,
        terms,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Proceso de registro Exitoso",
        showConfirmButton: false,
        timer: 2500,
      });
      setNombre("");
      setApellidoPaterno("");
      setApellidoMaterno("");
      setCorreo("");
      setTerms(false);
      setError(false);
    }
  };
  const isDisabled =
    [nombre, apellidoPaterno, apellidoMaterno, correo].includes("") ||
    terms === false
      ? true
      : false;

  return (
    <>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Formulario</h2>
        <form
          onSubmit={onSubmit}
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        >
          {error && <Error mensaje={"Todos los campos son obligatorios"} />}
          <div className="mt-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              placeholder="John"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellido Paterno
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              onChange={(e) => setApellidoPaterno(e.target.value)}
              value={apellidoPaterno}
              placeholder="Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellido Materno
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              onChange={(e) => setApellidoMaterno(e.target.value)}
              value={apellidoMaterno}
              placeholder="Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Correo
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              name="email"
              onChange={(e) => setCorreo(e.target.value)}
              value={correo}
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="checkbox"
              id="cbox2"
              onChange={handleCheckboxChange}
              checked={terms}
            />
            <label htmlFor="cbox2" className="pl-2">
              Aceptar terminos y condiciones
            </label>
          </div>
          <button
            className={`w-full bg-indigo-300 text-white text-sm font-bold py-2 px-4 rounded-md transition duration-300 cursor-default ${
              isDisabled ? "bg-indigo-300" : "bg-indigo-600 cursor-pointer"
            } `}
            type="submit"
          >
            Registrar
          </button>
        </form>
      </div>
    </>
  );
}
