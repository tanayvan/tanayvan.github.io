import React from "react";
import Hamburger from "hamburger-react";

export default function Navbar({ isOpen, setOpen }) {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        alignContent: "space-between",
        justifyContent: "space-between",
        flexDirection: "row",
        position: "fixed",
        top: "0",
        backgroundColor: "#121212",
      }}
    >
      <div className="" style={{ margin: "2rem" }}>
        <h1>TV</h1>
      </div>
      <div className="" style={{ margin: "2rem" }}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
}
