import React from "react";

export default function Page2({ onRouteChange }) {
  return (
    <div>
      <h1>Page 2</h1>

      <button onClick={() => onRouteChange("page1")}>Page1</button>
      <button onClick={() => onRouteChange("page3")}>Page3</button>
    </div>
  );
}
