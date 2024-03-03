"use client";
import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import { minify } from "next/dist/build/swc";
import AceEdior from "react-ace";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

interface CodeProps {
  onCodeChnage: (code: string) => void;
  language: string;
  theme: string;
  icon: string;
  background?: string;
  padding?: string;
}

function CodeEditor({
  onCodeChnage,
  language,
  theme,
  icon,
  background,
  padding,
}: CodeProps) {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(300);

  // @ts-ignore
  const handleResize = (e, direction, ref, pos) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight));
  };
  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <Resizable
      minHeight={300}
      minWidth={500}
      maxWidth={1000}
      defaultSize={{
        width: width,
        height: height || 300,
      }}
      onResize={handleResize}
      className="resizeable-container relative"
      style={{
        background: "red",
      }}
    >
      <div>
        <AceEdior
          value=" function() { return 'Hello World' } "
          name="id_of_div"
          fontSize={16}
          theme="monokai"
          mode={language}
          wrapEnabled={true}
          showPrintMargin={false}
          highlightActiveLine={false}
          showGutter={false}
          editorProps={{ $blockScrolling: true }}
          className="ace-editor-container"
        />
      </div>
    </Resizable>
  );
}

export default CodeEditor;
