import React, { useState } from "react";

const styles = ({ red, green, blue }) => ({
  width: "255px",
  height: "255px",
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  margin: "60px auto",
});

const Square = () => {
  const [rgbColor, setRgbColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  const [intervalID, setIntervalID] = useState(null);

  const changeColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    setRgbColor({ red, green, blue });
  };

  const handleChangeColor = () => setIntervalID(setInterval(changeColor, 2000));

  const clearChangeColorEvent = () => clearInterval(intervalID);

  const restart = () => {
    setRgbColor({ red: 0, green: 0, blue: 0 });
    clearChangeColorEvent();
  };

  return (
    <>
      <button onClick={restart}>Restart</button>
      <div
        style={styles(rgbColor)}
        onMouseOver={handleChangeColor}
        onMouseLeave={clearChangeColorEvent}
        onDoubleClick={clearChangeColorEvent}
      ></div>
    </>
  );
};

export default Square;
