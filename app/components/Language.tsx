"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

interface LanguageProps {
  language: string;
  setLanguage: (language: string) => void;
  setIcon: (icon: string) => void;
}

function Language({ language, setLanguage, setIcon }: LanguageProps) {
  return (
    <div>
      <p className="py-[5px] text-sm font-medium ">Language</p>
      <div className="dropdown-title capitalize w-[120px] ">
        {language}
        <ChevronDown />
      </div>
    </div>
  );
}

export default Language;
