import "./App.css";

import Editor from "./Editor";
import Result from "./Result";
import { useEffect, useState } from "react";

function App(props) {
  const [markdownLogs, setMarkdownLogs] = useState([]);
  const addMarkdownLog = (log) => {
    // let logs = [...markupLogs, log];
    setMarkdownLogs(log);
  };

  const [apiResponse, setApiResponse] = useState();

  

  function callAPI () {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => setApiResponse(res))
        .catch(err => console.log(err));
  }

  useEffect( () => {
    callAPI();
  }, [])

  

  return (
    <div className="App">
      {/* <p className="App-intro">{apiResponse}</p> */}
      <h1>React Markdown Previewer</h1>
      <Editor addMarkdownLog={addMarkdownLog} />
      <Result markdowns={markdownLogs} />
    </div>
  );
}

export default App;
