import React from "react";
import "./App.css";

function Child({ onAction, onHandleReset }) {
  return (
    <p>
      <button onClick={onAction}>Click Me! </button>{" "}
      <button onClick={onHandleReset}> Reset</button>
    </p>
  );
}

class CountingParentArrowFunction extends React.Component {
  // initialize state with a property initializer
  // you can access this.props if needed
  state = { actionCount: 0 };

  // writing the handler as an arrow function
  // means it will retain the proper value of
  // `this`, so we can avoid having to bind it
  handleAction = (action) => {
    console.log("Child says", action);
    // Replace actionCount with an incremented value this.setState({
    this.setState({
      actionCount: this.state.actionCount + 1,
    });
  };

  handleReset = (action) => {
    console.log("Reset button", action);

    this.setState({
      actionCount: 0,
    });
  };

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} onHandleReset={this.handleReset} />{" "}
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

class CountingParent extends React.Component {
  // The constructor is called when a
  // component is created
  constructor(props) {
    super(props);
    // Set the state here. Use "props" if needed.
    this.state = { actionCount: 0 };
    // Bind the event handler function, so that its // `this` binding isn't lost when it gets passed // to the button
    this.handleAction = this.handleAction.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAction(action) {
    console.log("Child says", action);
    // Replace actionCount with an incremented value this.setState({
    this.setState({
      actionCount: this.state.actionCount + 1,
    });
  }

  handleReset(action) {
    console.log("Reset button", action);

    this.setState({
      actionCount: 0,
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} onHandleReset={this.handleReset} />{" "}
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

const CountingParentMain = () => (
  <div>
    <CountingParent />
    <CountingParent />
    <CountingParent />
    <br />
    CountingParentArrowFunction
    <CountingParentArrowFunction />
    <CountingParentArrowFunction />
    <CountingParentArrowFunction />
  </div>
);

export default CountingParentMain;
