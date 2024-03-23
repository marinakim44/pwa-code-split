import "../App.css";

export default function Page3({ onRouteChange }) {
  return (
    <div>
      <h1>Page 3</h1>

      <button onClick={() => onRouteChange("page1")}>Page1</button>
      <button onClick={() => onRouteChange("page2")}>Page2</button>
      <button onClick={() => onRouteChange("lazypage")}>LazyComponent</button>
    </div>
  );
}
