import React from "react";

function FormInput({ label, type, name }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-white">{label}</legend>
      <input
        type={type}
        className="input w-full text-white bg-gray-800 placeholder-gray-400 rounded-md p-2"
        placeholder="Type here"
        name={name}
      />
    </fieldset>
  );
}

export default FormInput;
