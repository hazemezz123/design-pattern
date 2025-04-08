import React from "react";

const LSP = () => {
  return (
    <div>
      <Button
        style={{ color: "green" }}
        label={"log In"}
        onClick={() => alert("The user log in")}
      />
      <Button disabled={true} label={"disabled Button here"} />
      <Button
        style={{ color: "red" }}
        label={"log Out"}
        onClick={() => alert("The user log Out")}
      />
    </div>
  );
};

function Button({ label, onClick, disabled = false, style }) {
  return (
    <button onClic k={onClick} disabled={disabled} style={style}>
      {label}
    </button>
  );
}
export default LSP;
