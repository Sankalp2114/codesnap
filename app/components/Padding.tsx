"use client";
import React from "react";

interface PaddingProps {
  paddings: string[];
  currentPadding: string;
  setCurrentPadding: (padding: string) => void;
}

function Padding({
  paddings,
  currentPadding,
  setCurrentPadding,
}: PaddingProps) {
  const changePadding = (newPadding: string) => {
    setCurrentPadding(newPadding);
  };

  return (
    <div>
      <p className="py-[5px] text-sm font-medium">Padding</p>
      <div className="flex gap-4 ">
        {paddings.map((paddingv, i) => (
          <button
            key={i}
            onClick={() => changePadding(paddingv)}
            className={`h-[36px] flex items-center justify-center text-sm px-2 rounded-md
            ${
              currentPadding === paddingv &&
              "border border-[#3c3c3c] text-white"
            } hover:text-white ease-linear transition duration-300`}
          >
            {paddingv}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Padding;
