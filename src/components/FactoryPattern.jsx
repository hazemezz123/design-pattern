import React from "react";

const FactoryPattern = () => {
  return (
    <div>
      {createButton("primary")}
      {createButton("secondary")}
      {createButton("default")}
    </div>
  );
};

function createButton(type) {
  switch (type) {
    case "primary":
      return (
        <button className="primary" style={{ color: "blue" }}>
          Primary
        </button>
      );
    case "secondary":
      return (
        <button className="secondary" style={{ color: "yellow" }}>
          Secondary
        </button>
      );
    default:
      return <button className="default">Default</button>;
  }
}
export default FactoryPattern;
