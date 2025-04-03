import React from "react";

const LSP = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "100px",
      }}
    >
      <Button
        onClick={() => {
          alert("Hello World");
        }}
      >
        Click me
      </Button>
      <Button
        onClick={() => {
          alert("Hello World");
        }}
        disabled=""
      >
        Click me But am disabled
      </Button>
    </div>
  );
};

function Button({ children, style, disabled = false, onClick }) {
  return (
    <button style={style} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default LSP;
