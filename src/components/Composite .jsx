import React from "react";

function Comment({ text, replies, level = 0 }) {
  // Styles that change based on nesting level
  const style = {
    marginLeft: `${level * 20}px`,
    marginTop: "10px",
    padding: "10px",
    backgroundColor: level === 0 ? "#e0ffe0" : "#f0f0f0", // green for main, light grey for replies
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  };

  return (
    <div style={style}>
      <p style={{ margin: 0 }}>{text}</p>
      {replies &&
        replies.map((reply, index) => (
          <Comment
            key={index}
            text={reply.text}
            replies={reply.replies}
            level={level + 1}
          />
        ))}
    </div>
  );
}

const commentData = {
  text: "Main comment",
  replies: [
    {
      text: "Reply to main comment",
      replies: [
        {
          text: "Nested reply",
        },
      ],
    },
    {
      text: "Another reply",
    },
    {
      text: "Yet another reply",
    },
  ],
};

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Comments</h2>
      <Comment text={commentData.text} replies={commentData.replies} />
    </div>
  );
}
