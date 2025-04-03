import React from "react";

const FactoryPattern = () => {
  return (
    <div className="d-flex gap-5 justify-content-center">
      {CreateButton("primary")}
      {CreateButton("secondary")}
      {CreateButton("danger")}
      {CreateButton("info")}
      {CreateButton("")}
    </div>
  );
};

function CreateButton(type) {
  switch (type) {
    case "primary":
      return <button className="btn btn-primary">Primary</button>;
    case "secondary":
      return <button className="btn btn-secondary">Secondary</button>;
    case "danger":
      return <button className="btn btn-danger">Danger</button>;
    case "info":
      return <button className="btn btn-info">Info</button>;
    default:
      return <button className="btn btn-default t-white">Default</button>;
  }
}

export default FactoryPattern;
