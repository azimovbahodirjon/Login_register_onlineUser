import { fieldset } from "framer-motion/client";
import React from "react";

function FormInput({ label, type, name }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-white">{label}</legend>
      <input
        type={type}
        className="input w-full text-white bg-blue-500 placeholder-gray-300 rounded-md p-2"
        placeholder="Type here"
        name={name}
      />
    </fieldset>
  );
}

export default FormInput;
