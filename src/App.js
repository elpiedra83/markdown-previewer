import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./App.css";
import gfm from "remark-gfm";

function App() {
  const first = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ### And also supports \`<br>\` for skip line <br><br>
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;
  const [markdown, setMarkdown] = useState(first);
  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter style={dark} language={language} children={value} />
      );
    },
  };
  return (
    <div className="App">
      <h1 id="h1-1">Editor</h1>
      <textarea
        autofocus
        type="text"
        id="editor"
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      />
      <h1 id="h1-2">Preview</h1>
      <div id="preview">
        <ReactMarkdown
          allowDangerousHtml
          plugins={[gfm]}
          source={markdown}
          renderers={renderers}
          // children={}
        />
      </div>
    </div>
  );
}

export default App;
