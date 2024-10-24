// Custom Toast UI Viewer
import React from "react";
// TOAST UI Editor
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css"; // default CSS

const MyViewer = ({ Content }) => {
  return (
    <React.Fragment>
      <Viewer initialValue={Content || ""} />
    </React.Fragment>
  );
};

export default MyViewer;
