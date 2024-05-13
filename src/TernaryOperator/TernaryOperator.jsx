// Create a component that renders different text based on a boolean state. - Done
// Build a component that displays different colors based on a boolean state. -Done
// Develop a component that toggles between two images based on a boolean state. -Done
// Implement a component that changes the font size based on a boolean state. -Done
// Create a component that renders different background images based on a boolean state. - Done
// Build a component that toggles between displaying two different lists based on a boolean state. -Done
// Create a component that renders different icons based on a boolean state. - Done
// Build a component that switches between rendering text and an input field based on a boolean state. -Done

import { useState } from "react";

const images = ["src/assets/images/cat.jpeg", "src/assets/images/dog.jpeg"];
export default function TernaryOperator() {
  const [hello] = useState(true);
  const [color] = useState(true);
  const [image, setImage] = useState(true);
  const [textSize] = useState(true);
  const [icon] = useState(true);
  return (
    <>
      <h1>{hello ? "Hello World!" : "Goodbye, World!"}</h1>
      <h1>{!hello ? "Hello World!" : "Goodbye, World!"}</h1>
      <h1 style={{ color: color ? "blue" : "red" }}>Hello color!</h1>
      <h1 style={{ color: !color ? "blue" : "red" }}>Hello color!</h1>

      <div>
        <img
          style={{ cursor: "pointer" }}
          src={image ? images[0] : images[1]}
          alt="animals"
          onClick={() => setImage(!image)}
        />
      </div>
      <h1 style={{ fontSize: textSize ? "120px" : "5px" }}>Bwakag</h1>
      <h1 style={{ fontSize: !textSize ? "120px" : "15px" }}>Bwakag</h1>

      <div
        style={{
          height: "400px",
          width: "400px",
          backgroundImage: `url(${image ? images[0] : images[1]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "400px",
          backgroundImage: `url(${!image ? images[0] : images[1]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <ul>
        {hello ? (
          <ul>
            <li>Banana</li>
            <li>Apple</li>
            <li>Orange</li>
          </ul>
        ) : (
          <>
            <li>Egg plant</li>
            <li>Okra</li>
            <li>Cabbage</li>
          </>
        )}
      </ul>

      <ul>
        {!hello ? (
          <ul>
            <li>Banana</li>
            <li>Apple</li>
            <li>Orange</li>
          </ul>
        ) : (
          <>
            <li>Egg plant</li>
            <li>Okra</li>
            <li>Cabbage</li>
          </>
        )}
      </ul>

      <button>{icon ? "Sun" : "Moon"}</button>

      <button>{!icon ? "Sun" : "Moon"}</button>

      <ul>{hello ? <h1>hello</h1> : <input type="text" />}</ul>
      <ul>{!hello ? <h1>hello</h1> : <input type="text" />}</ul>
    </>
  );
}
