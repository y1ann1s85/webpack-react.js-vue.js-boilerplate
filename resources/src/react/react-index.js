import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
    render() {
        return <div>Hello from react!</div>;
    }
}
  
ReactDOM.render(
    <Hello/>, document.getElementById("react")
);
