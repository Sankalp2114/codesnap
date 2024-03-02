"use client";
import React from "react";
import { Resizable } from "re-resizable";
import { minify } from "next/dist/build/swc";
import AceEdior from "react-ace";

function CodeEditor() {
  return (
    <Resizable minHeight={300} minWidth={450} maxWidth={1000}>
      <div>
        <AceEdior
          value=" function() { retun 'Hello World' } "
          name="id_of_div"
          fontSize={16}
          wrapEnabled={true}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="ace-editor-container"
        />
      </div>
    </Resizable>
  );
}

export default CodeEditor;
