import React from "react";

// This component defines the common interface for both 
// leaf and composite objects in the Composite pattern
const CommentComponent = ({ 
  id, 
  text, 
  level = 0,
  renderContent,
  ...props 
}) => {
  // Common styles for all comment components
  const baseStyle = {
    marginLeft: `${level * 20}px`,
    marginTop: "10px",
    padding: "10px",
    backgroundColor: level === 0 ? "#e0ffe0" : "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };
  
  return (
    <div className="comment-component" data-id={id}>
      {renderContent({ text, level, style: baseStyle, ...props })}
    </div>
  );
};

export default CommentComponent; 