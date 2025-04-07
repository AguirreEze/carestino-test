import { useState } from "react";

export default function Cell({
  closeContextMenu,
  activeColor,
}: {
  closeContextMenu: VoidFunction;
  activeColor: string;
}) {
  const [active, setActive] = useState("white");

  return (
    <div
      className={"cell"}
      style={{
        backgroundColor: active,
      }}
      onClick={() => {
        setActive(active === "white" ? activeColor : "white");
        closeContextMenu();
      }}
      onMouseEnter={(e) => {
        if (e.buttons === 1) setActive(activeColor);
      }}
    ></div>
  );
}
