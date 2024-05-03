import React from "react";

export const Error = ({ mensaje }: any) => {
  return (
    <div className="bg-red-500 text-white text-center font-bold py-3">
      <p>{mensaje}</p>
    </div>
  );
};
