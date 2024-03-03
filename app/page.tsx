"use client";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { languages } from "@/utils/utilities";
import Language from "./components/Language";
export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);

  return (
    <main>
      <header>
        <Language />
      </header>
      <div className="code-editor">
        <CodeEditor language={language} />
      </div>
    </main>
  );
}
