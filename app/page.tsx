"use client";
import { useRef, useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { backgrounds, languages, themes } from "@/utils/utilities";
import Language from "./components/Language";
import Theme from "./components/Theme";
import Background from "./components/Background";
import Padding from "./components/Padding";
import { Download } from "lucide-react";
import Footer from "./components/Footer";
import html2canvas from "html2canvas";
import { image } from "html2canvas/dist/types/css/types/image";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [icon, setIcon] = useState(languages[0].icon);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[2]);
  const [code, setCode] = useState(languages[0].code);

  const editor = useRef(null);

  const exportPng = async () => {
    const editorPng = editor.current;

    if (editorPng) {
      const handleElems = document.querySelectorAll(".handle") as any;
      const cursorElem = document.querySelector(".ace_cursor") as any;
      const codetitle = document.querySelector(".code-title") as any;
      const codeEditor = document.querySelector(".ace_editor") as any;

      handleElems.forEach((elem: any) => {
        elem.style.display = "none";
      });
      cursorElem.style.display = "none";
      codetitle.style.boxShadow = "none";
      codeEditor.style.boxShadow = "none";

      const canvas = await html2canvas(editorPng);
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const link = document.createElement("a");
      link.download = "codeSnap.png";
      link.href = image;

      link.click();

      handleElems.forEach((elem: any) => {
        elem.style.display = "block";
      });
      cursorElem.style.display = "block";
      codetitle.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
      codeEditor.style.boxShadow = "2px 3px 10px rgba(0, 0, 0, 0.2)";
    }
  };

  return (
    <main className="h-[100vh] flex items-center flex-col justify-between">
      <header className="mt-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded-xl border border-[#3c3c3c] shadow-md flex gap-6">
        <Language
          language={language}
          setLanguage={setLanguage}
          setIcon={setIcon}
          setCode={setCode}
        />
        <Theme theme={theme} setTheme={setTheme} />
        <Background background={background} setBackground={setBackground} />
        <Padding
          paddings={paddings}
          setCurrentPadding={setCurrentPadding}
          currentPadding={currentPadding}
        />

        <div className="export-button self-center ml-auto justify-center ">
          <button
            className=" flex items-center gap-3 p-3 rounded-md text-sm text-[#ff6363] bg-[rgba(255,99,99,.15)] font-medium bg-opacity-10 
          hover:bg-[rgba(255,99,99,.35)] ease-in-out transition-all duration-200"
            onClick={exportPng}
          >
            <Download />
            Export PNG
          </button>
        </div>
      </header>
      <div className="code-editor mt-[10rem]" ref={editor}>
        <CodeEditor
          language={language}
          icon={icon}
          theme={theme}
          code={code}
          onCodeChange={setCode}
          background={background}
          currentPadding={currentPadding}
        />
      </div>
      <Footer />
    </main>
  );
}
