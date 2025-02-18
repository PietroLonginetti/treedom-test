import React, { useState } from "react";
import { Step } from "../entities/glabal.entities";

type FormProps = {
  step: Step;
  onValidate?: (data?: Partial<Record<string, any>>) => void;
  disabled?: boolean;
};

export default function Form(props: FormProps) {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  return (
    <div
      className={`flex flex-col gap-3 
      min-w-full md:min-w-auto
      ${props.disabled ? "opacity-50" : ""}`}
    >
      <h2>Form ({props.step} step)</h2>
      <div className="flex flex-col gap-2">
        <input
          className="border"
          placeholder="Lorem ipsum*"
          value={firstInput}
          onChange={(e) => {
            setFirstInput(e.target.value);
          }}
          disabled={props.disabled}
        ></input>
        <input
          className="border"
          placeholder="Lorem ipsum*"
          value={secondInput}
          onChange={(e) => {
            setSecondInput(e.target.value);
          }}
          disabled={props.disabled}
        ></input>
      </div>

      {!props.disabled && (
        <button
          className="rounded px-4 py-2 bg-[#9aabfc] hover:bg-[#7a90fa] disabled:bg-[lightgray] disabled:opacity-40 duration-100"
          onClick={() =>
            props.onValidate &&
            props.onValidate({
              first: firstInput,
              second: secondInput,
            })
          }
          disabled={!firstInput || !secondInput}
        >
          Validate Step ➡️
        </button>
      )}
    </div>
  );
}
