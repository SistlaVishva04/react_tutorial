import React from "react";
import ReactDOM from "react-dom/client";
const App = React.createElement(
  "div",
  {},
  
    // React.createElement("div", { id: "container1" },
      React.createElement("h1", {}, "Hello from h1"),
      React.createElement("h2", {}, "hello from h2"),
    // React.createElement("div", { id: "container2" },
      React.createElement("h1", {}, "this is h1 tag"),
      React.createElement("h2", {}, "this is h2 tag"),
      React.createElement("h3", {}, "this is h3 tag"),
      [
        React.createElement("h1",{key:"h1"}," array h1 with key h1"),
        React.createElement("h2",{key:"h2"}," array h2 with key h2"),
      ]
    
  
);

ReactDOM.createRoot(document.getElementById("root")).render(App);
