import "./Toolbar.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize, faMaximize } from "@fortawesome/free-solid-svg-icons";

function Toolbar({ toggleIsEditorMaximized, isEditorMaximized }) {
  const minimizeIcon = <FontAwesomeIcon icon={faMinimize} />;
  const maximizeIcon = <FontAwesomeIcon icon={faMaximize} />;

  return (
    <div className="toolbarWrap">
      <span className="icon" onClick={toggleIsEditorMaximized}>
        {isEditorMaximized ? minimizeIcon : maximizeIcon}
      </span>
    </div>
  );
}

export default Toolbar;
