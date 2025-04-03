import React from "react";

const FactoryPattern = () => {
  return <div>FactoryPattern</div>;
};

function CreateButton(type) {
  switch (type) {
    case "primary":
      return <button className="btn btn-primary">Primary</button>;
    case "secondary":
      return <button className="btn btn-secondary">Secondary</button>;
    case "danger":
      return <button className="btn btn-danger">Danger</button>;
    default:
      return <button className="btn btn-default">Default</button>;
  }
}

export default FactoryPattern;
