import "./App.css";
import Page1 from "./components/Page1";
import { Component } from "react";
import AsyncComponent from "./components/AsyncComponent";
import { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./components/LazyComponent"));

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
      component: null,
    };
  }

  onRouteChange = (route) => {
    // no code splitting, but splitting code with async higher order component
    this.setState({ route });

    // with code splitting
    // if (route === "page1") {
    //   this.setState({ route });
    // } else if (route === "page2") {
    //   import("./components/Page2").then((Page2) =>
    //     this.setState({ route: route, component: Page2.default })
    //   );
    // } else if (route === "page3") {
    //   import("./components/Page3").then((Page3) =>
    //     this.setState({ route: route, component: Page3.default })
    //   );
    // }
  };

  render() {
    if (this.state.route === "page1") {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === "page2") {
      const AsyncPage2 = AsyncComponent(() => import("./components/Page2"));
      return <AsyncPage2 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === "page3") {
      const AsyncPage3 = AsyncComponent(() => import("./components/Page3"));
      return <AsyncPage3 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === "lazypage") {
      return (
        <Suspense>
          <LazyComponent onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }
    // if (this.state.route === "page1") {
    //   return <Page1 onRouteChange={this.onRouteChange} />;
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />;
    // }
  }
}

export default App;
