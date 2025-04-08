import React from "react";

const OCP = () => {
  return (
    <div>
      <ErrorAlert message="Error: Something went wrong" />
      <WarningAlert message="Warning: This is a warning" />
      <SuccussAlert message="Succuss: This is a succuss" />
    </div>
  );
};

function Alert({ children, style }) {
  return <div style={style}>{children}</div>;
}

function ErrorAlert({ message }) {
  return <Alert style={{ color: "red" }}>{message}</Alert>;
}

function WarningAlert({ message }) {
  return <Alert style={{ color: "orange" }}>{message}</Alert>;
}
function SuccussAlert({ message }) {
  return <Alert style={{ color: "green" }}>{message}</Alert>;
}

export default OCP;
