import React from "react";
const NameContext = React.createContext("Jack");

class Hello extends React.PureComponent {
  render() {
    return (
      <NameContext.Consumer>
        {name => <h1>Hello *{name}* who come from the new Context API!</h1>}
      </NameContext.Consumer>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Michael"
    };

    this.modify = this.modify.bind(this);
  }

  modify() {
    this.setState({
      name: this.state.name + "!"
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.modify}>Modify Context Value</button>
        <NameContext.Provider value={this.state.name}>
          {this.props.children}
        </NameContext.Provider>
      </div>
    );
  }
}

export default class reactContext extends React.Component {
  state = {};
  render() {
    return (
      <App>
        <Hello />
      </App>
    );
  }
}
