import React from "react";

export default function LazyComponent({ onRouteChange }) {
  return (
    <div>
      <h1>Lazy Component</h1>
      <button onClick={() => onRouteChange("page1")}>Page1</button>
      <button onClick={() => onRouteChange("page2")}>Page2</button>
      <button onClick={() => onRouteChange("page3")}>Page3</button>
    </div>
  );
}
