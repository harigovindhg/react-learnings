import React from "react";
import ReactDom from "react-dom/client"; // provides the render method
// stateless functional component
// always return JSX

// function Greeting() {
//   return <h1>Welcome to my first component</h1>;  // should always return something from functional components
// }

// ====================================================================================================

// JSX rules:
//  - return a single element
//  - div / section / article or Fragment
//  - use camelCase for html attributes
//  - className instead of class
//  - close every element
//  - formatting

// ====================================================================================================
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')  //Using React.createElement to create JSX elements
// }

function Greeting() {
  return (
    // React fragment can be used to wrap a set of elements into a single element
    <React.Fragment>
      <div>
        <GreetingHeading />
        <ClickableLink />
      </div>
      <div></div>
    </React.Fragment>
  );
}
// Nesting Components in React
const GreetingHeading = () => <h3>Hello People!</h3>;
const ClickableLink = () => (
  <ul>
    <li>
      <a href="#">Click this link!</a>
    </li>
  </ul>
);
// ====================================================================================================

// IMPORTANT: As of March 2022, ReactDom is now deprecated, and is no longer ideal,
// use ReactDom.createRoot instead

// React 17 and below syntax
// ReactDom.render(<Greeting />, document.getElementById("root")); // general syntax is render('what to render', 'where to render')

// React 18 syntax
const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(<Greeting />);
