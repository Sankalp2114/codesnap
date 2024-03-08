"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { languages } from "@/utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface LanguageProps {
  language: string;
  setLanguage: (language: string) => void;
  setIcon: (icon: string) => void;
  setCode: (code: string) => void;
}

function Language({ language, setLanguage, setIcon, setCode }: LanguageProps) {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDrowdown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newIcon = languages.find(
      (language) => language.name === newLanguage
    )?.icon;

    const newCode = languages.find(
      (language) => language.name === newLanguage
    )?.code;

    if (newCode) {
      setCode(newCode);
    }

    if (newIcon) {
      setIcon(newIcon);
    }
  };
  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropDown(false)}>
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
    </OutsideClickHandler>
  );
}

export default Language;
