import React from "react";

const OCP = () => {
  return (
    <div>
      <DangerAlert message="danger" />
      <SuccessAlert />
      <InfoAlert />
    </div>
  );
};

function Alert({ children, style }) {
  return <div style={style}>{children}</div>;
}

function DangerAlert({ message }) {
  return <Alert style={{ color: "red" }}>{message}</Alert>;
}
function SuccessAlert() {
  return <Alert style={{ color: "green" }}>Success</Alert>;
}
function InfoAlert() {
  return <Alert style={{ color: "yellow" }}>Info</Alert>;
}

export default OCP;
