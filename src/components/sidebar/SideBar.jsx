import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function SideBar() {
  const {
    play: { score },
  } = useContext(GlobalContext);
  //list of scores

  return (
    <div style={sideBarStyle}>
      <h3 style={scoreBarStyle}>score bar</h3>
      <div>current score: {score}</div>
      {/* <ul>prev scores...</ul> */}
    </div>
  );
}
const scoreBarStyle = { marginTop: "5px" };
const sideBarStyle = {
  height: "90vh",
  border: "1px solid black",
  borderRadius: "8px",
  width: "120px",
  overflow: "hidden",
  maxHeight: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
