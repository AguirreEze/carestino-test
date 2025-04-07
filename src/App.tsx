import { MouseEvent, useState } from "react";
import "./App.css";
import Cell from "./Cell";

function App() {
  const [activeColor, setActiveColor] = useState("yellow");
  const [colorSelect, setColorSelect] = useState(false);
  const [position, setPosition] = useState([0, 0]);

  function getCellCount() {
    const columns = 100;
    const viewWidth = window.innerWidth;
    const viewhHeight = window.innerHeight;

    const cellWidth = viewWidth / columns;

    const rowCount = viewhHeight / cellWidth + 10;

    return columns * rowCount;
  }

  function handleRightClick(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setColorSelect(!colorSelect);
    setPosition([e.pageX, e.pageY]);
  }

  function changeActiveColor(color: string) {
    setActiveColor(color);
    setColorSelect(false);
  }

  return (
    <div className="container" onContextMenu={handleRightClick}>
      {Array.from({ length: getCellCount() }).map((_, index) => (
        <Cell
          closeContextMenu={() => setColorSelect(false)}
          key={index}
          activeColor={activeColor}
        />
      ))}
      <div
        className={
          colorSelect
            ? "colorSelector colorSelector_active"
            : "colorSelector colorSelector_closed"
        }
        style={{
          left: position[0],
          top: position[1],
        }}
        onMouseLeave={() => setColorSelect(false)}
      >
        <button
          onClick={() => changeActiveColor("yellow")}
          className="button"
          style={{ backgroundColor: "yellow" }}
        />
        <button
          onClick={() => changeActiveColor("red")}
          className="button"
          style={{ backgroundColor: "red" }}
        />
        <button
          onClick={() => changeActiveColor("blue")}
          className="button"
          style={{ backgroundColor: "blue" }}
        />
        <button
          onClick={() => changeActiveColor("black")}
          className="button"
          style={{ backgroundColor: "black" }}
        />
        <button
          onClick={() => changeActiveColor("purple")}
          className="button"
          style={{ backgroundColor: "purple" }}
        />
      </div>
    </div>
  );
}

export default App;
