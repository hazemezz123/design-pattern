import React from "react";

const LSP = () => {
  return (
    <div>
      <Button
        style={{ color: "red" }}
        onClick={() => alert("hello from the Red Button")}
      >
        Danger Red Button
      </Button>
      <Button
        style={{ color: "green" }}
        onClick={() => alert("am the green one")}
      >
        Info Yellow Button
      </Button>
      <Button style={{ color: "gray" }} disabled="true" />
    </div>
  );
};

function Button({ onClick, style, disabled = false, children = "disabled" }) {
  return (
    <button disabled={disabled} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default LSP;
