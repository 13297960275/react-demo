import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class WelcomeC extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}

class App extends Component {
  	render() {
    	return (
	      	<div className="App">
	        	<header className="App-header">
	          		<img src={logo} className="App-logo" alt="logo" />
	          		<h1 className="App-title">Welcome to React</h1>
	        	</header>
	        	<p className="App-intro">
	          		To get started, edit <code>src/App.js</code> and save to reload.
	        	</p>
	      		<WelcomeC name="Sara" />
	      	</div>
    	);
  	}
}

export default App;
