import "./Result.css";
import { marked } from "marked";
import Toolbar from "./Toolbar.js";

function Result(props) {
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  marked.setOptions({
    breaks: true,
  });

  const result = marked.parse(props.markdowns.toString());

  return (
    <div className="Result" id="preview">
      <h2>Result</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: result }}></div>
    </div>
  );
}

export default Result;
