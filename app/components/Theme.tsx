"use client";
import React, { useState } from "react";
import { Interface } from "readline";
import { themes } from "@/utils/utilities";
import { ChevronDown } from "lucide-react";
import OutsideClickHandler from "react-outside-click-handler";

interface ThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function Theme({ theme, setTheme }: ThemeProps) {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };
  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropDown(false)}>
      <div className="theme-selector" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium ">Theme</p>
        <div className="dropdown-title capitalize w-[120px] ">
          {theme}
          <ChevronDown />
        </div>
        {showDropDown && (
          <div className="dropdown-menu w-[120px]">
            {themes.map((Theme, i) => {
              return (
                <div key={i}>
                  <button
                    className="drowdown-item w-[120px] text-left top-[74px]"
                    onClick={() => handleThemeChange(Theme)}
                  >
                    {Theme}
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

export default Theme;
