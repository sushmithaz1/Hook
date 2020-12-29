import React from "react";

function* createColorIterator() {
  let i = 0;
  const colors = [
    "red",
    "orange",
    "red",
    "orange",
    "yellow"
  ];
  while (i < colors.length) {
    const color = colors[i];
    i++;
    yield color;
  }
}

let colors = createColorIterator();
let initialState = colors.next();

function Apps() {
  const [colorState, setColorState] = React.useState(initialState);

  function updateBackgroundColor() {
    setColorState(colors.next());
  }

  function reset() {
    colors = createColorIterator();
    setColorState(initialState);
  }

  const { value, done } = colorState;

  return (
    <div>
      <h1>Hello!</h1>
      <h3>{value}</h3>
      <button disabled={done} onClick={updateBackgroundColor}>
        Change background color
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Apps;


