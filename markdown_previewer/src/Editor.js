import Toolbar from "./Toolbar";
import React, { useState } from "react";
import './Editor.css'

function Editor({ addMarkdownLog }) {
  const [markdown, setMarkdown] = useState();
  const handleSubmit = (e) => {
    addMarkdownLog(markdown);
    e.preventDefault();
  };

  const [isEditorMaximized, setIsEditorMaximized] = useState(false);
  const toggleIsEditorMaximized = () => {
    setIsEditorMaximized(!isEditorMaximized);
  };

  return (
    <div className="Editor">
      <h2>Editor </h2>
      <Toolbar
        toggleIsEditorMaximized={toggleIsEditorMaximized}
        isEditorMaximized={isEditorMaximized}
      />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className={`${isEditorMaximized ? "maximizeSize" : "minimizeSize"}`}
        ></textarea>
        <div><input className="submitButton" type="submit" value="submit"></input></div>
      </form>
    </div>
  );
}

export default Editor;
