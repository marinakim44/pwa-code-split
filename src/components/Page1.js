export default function Page1({ onRouteChange }) {
  return (
    <div>
      <h1>Page 1</h1>

      <button onClick={() => onRouteChange("page2")}>Page2</button>
      <button onClick={() => onRouteChange("page3")}>Page3</button>
      <button onClick={() => onRouteChange("lazypage")}>LazyComponent</button>
    </div>
  );
}
