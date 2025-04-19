import React from "react";
import CommentTree from "./CommentTree";
import { commentData } from "./commentData";

export default function CompositeExample() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Comment System (Composite Pattern)</h2>
      <p>Demonstrates a nested comment system using the Composite pattern</p>
      <CommentTree {...commentData} />
    </div>
  );
} 