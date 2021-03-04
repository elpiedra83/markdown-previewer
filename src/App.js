import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { render } from "react-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./App.css";
import gfm from "remark-gfm";

function App() {
  const [markdown, setMarkdown] = useState("# sup");
  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter style={dark} language={language} children={value} />
      );
    },
  };
  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      />
      <ReactMarkdown
        id="preview"
        plugins={[gfm]}
        source={markdown}
        renderers={renderers}
      />
    </div>
  );
}

export default App;
