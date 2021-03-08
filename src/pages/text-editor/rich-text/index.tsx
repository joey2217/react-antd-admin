import React, { useState } from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import throttle from "lodash/throttle";

const RichText = () => {
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(null)
  );

  const onChange = throttle((editorState) => {setEditorState(editorState)}, 1000);

  return (
    <>
      <BraftEditor value={editorState} onChange={onChange} />
      <div>
        <h2>Code</h2>
        {editorState.toHTML()}
      </div>
    </>
  );
};
export default RichText;
