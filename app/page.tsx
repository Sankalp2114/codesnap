"use client";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { languages } from "@/utils/utilities";
import Language from "./components/Language";
export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [icon, setIcon] = useState(languages[0].icon);

  return (
    <main className="h-[100vh] flex items-center flex-col justify-between">
      <header className="mt-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border border-[#3c3c3c] shadow-md ">
        <Language
          language={language}
          setLanguage={setLanguage}
          setIcon={setIcon}
        />
      </header>
      <div className="code-editor mt-[10rem]">
        <CodeEditor language={language} icon={icon} />
      </div>
    </main>
  );
}
