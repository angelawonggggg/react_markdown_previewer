import "./App.css";

import Editor from "./Editor";
import Result from "./Result";
import { useState } from "react";

function App(props) {
  const [markdownLogs, setMarkdownLogs] = useState([]);
  const addMarkdownLog = (log) => {
    // let logs = [...markupLogs, log];
    setMarkdownLogs(log);
  };

  return (
    <div className="App">
      <h1>React Markdown Previewer</h1>
      <Editor addMarkdownLog={addMarkdownLog} />
      <Result markdowns={markdownLogs} />
    </div>
  );
}

export default App;
