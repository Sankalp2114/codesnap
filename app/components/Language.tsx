"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { languages } from "@/utils/utilities";

interface LanguageProps {
  language: string;
  setLanguage: (language: string) => void;
  setIcon: (icon: string) => void;
}

function Language({ language, setLanguage, setIcon }: LanguageProps) {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDrowdown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newIcon = languages.find(
      (language) => language.name === newLanguage
    )?.icon;

    if (newIcon) {
      setIcon(newIcon);
    }
  };
  return (
    <div onClick={toggleDrowdown}>
      <p className="py-[5px] text-sm font-medium ">Language</p>
      <div className="dropdown-title capitalize w-[120px] ">
        {language}
        <ChevronDown />
      </div>
      {showDropDown && (
        <div className="dropdown-menu w-[120px]">
          {languages.map((lang, i) => {
            return (
              <div key={i}>
                <button
                  className="drowdown-item w-[120px] text-left top-[74px]"
                  onClick={() => handleLanguageChange(lang.name)}
                >
                  {lang.name}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Language;
