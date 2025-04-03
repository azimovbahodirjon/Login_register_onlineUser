import React from "react";

function FormTextArea({ label, name }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-white">{label}</legend>
      <textarea
        className="textarea h-32 w-full text-white bg-blue-500 placeholder-gray-300 rounded-md p-2 resize-none"
        placeholder="Type here"
        name={name}
      ></textarea>
    </fieldset>
  );
}

export default FormTextArea;
