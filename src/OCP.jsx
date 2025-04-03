import React from "react";

const OCP = () => {
  return (
    <div>
      <ErrorAlert message="Error" />
      <SuccessAlert message="Success" />
      <InfoAlert message="Info" />
    </div>
  );
};

function Alert({ children, style }) {
  return <div style={style}>{children}</div>;
}

function ErrorAlert({ message }) {
  return <Alert style={{ color: "red" }}>{message}</Alert>;
}

function SuccessAlert({ message }) {
  return <Alert style={{ color: "green" }}>{message}</Alert>;
}
function InfoAlert({ message }) {
  return <Alert style={{ color: "yellow" }}>{message}</Alert>;
}
export default OCP;
