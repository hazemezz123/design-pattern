import React from "react";
import CommentComponent from "./CommentComponent";

// CommentLeaf represents a leaf node in the Composite pattern
// It cannot have children (replies)
const CommentLeaf = ({ text, level = 0, id }) => {
  return (
    <CommentComponent
      id={id}
      text={text}
      level={level}
      renderContent={({ text, style }) => (
        <div style={style} className="comment-leaf">
          <p style={{ 
            margin: 0, 
            fontStyle: "italic",
            color: level > 2 ? "#666" : "inherit"
          }}>
            {text}
          </p>
        </div>
      )}
    />
  );
};

export default CommentLeaf; 