import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");
  const handleColor = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };
  const style = {
    backgroundColor: color,
    width: "100vw",
    height: "100vh",
  };
  const buttonStyle = "border-2 rounded-md p-4 bg-green-300";
  return (
    <div style={style} className="flex items-end justify-center">
      <div className="w-11/12 justify-evenly items-end flex p-20">
        <button onClick={handleColor} value={"red"} className={buttonStyle}>
          Red
        </button>
        <button onClick={handleColor} value={"green"} className={buttonStyle}>
          Green
        </button>
        <button onClick={handleColor} value={"blue"} className={buttonStyle}>
          Blue
        </button>
        <button onClick={handleColor} value={"red"} className={buttonStyle}>
          Olive
        </button>
        <button onClick={handleColor} value={"gray"} className={buttonStyle}>
          Gray
        </button>
        <button onClick={handleColor} value={"yellow"} className={buttonStyle}>
          Yellow
        </button>
        <button onClick={handleColor} value={"pink"} className={buttonStyle}>
          Pink
        </button>
        <button onClick={handleColor} value={"purple"} className={buttonStyle}>
          Purple
        </button>
        <button
          onClick={handleColor}
          value={"lavender"}
          className={buttonStyle}
        >
          Lavender
        </button>
        <button onClick={handleColor} value={"white"} className={buttonStyle}>
          White
        </button>
        <button onClick={handleColor} value={"black"} className={buttonStyle}>
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
