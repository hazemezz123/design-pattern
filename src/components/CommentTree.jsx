import React from "react";
import CommentLeaf from "./CommentLeaf";
import CommentComponent from "./CommentComponent";

// CommentTree serves as the Composite in the pattern
// It can contain both leaf nodes (comments without replies)
// and other composite nodes (comments that have replies)
const CommentTree = ({ id, text, replies = [], level = 0 }) => {
  // Determine if this is a leaf (no replies) or composite (has replies)
  const isLeaf = !replies || replies.length === 0;

  // If this is a leaf, render a leaf component
  if (isLeaf) {
    return <CommentLeaf id={id} text={text} level={level} />;
  }

  // Otherwise, render a composite component with its children
  return (
    <CommentComponent
      id={id}
      text={text}
      level={level}
      replies={replies}
      renderContent={({ text, style, replies }) => (
        <div style={style} className="comment-tree">
          {/* This is the comment's own content */}
          <div className="comment-content">
            <p style={{ margin: 0, fontWeight: level === 0 ? "bold" : "normal" }}>{text}</p>
          </div>
          
          {/* These are the child components (replies) */}
          <div className="comment-replies" style={{ marginTop: "10px" }}>
            {replies.map((reply, index) => (
              <CommentTree
                key={reply.id || index}
                id={reply.id || `${id}-${index}`}
                text={reply.text}
                replies={reply.replies}
                level={level + 1}
              />
            ))}
          </div>
        </div>
      )}
    />
  );
};

export default CommentTree; 