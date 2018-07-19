import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './components/staff/ManageSystem';
// import App from './components/test/index';
import App from './components/test/FunctionComp';

import Toggle from './components/test/Toggle';
import Popper from './components/test/Popper';

import {NameForm, FlavorForm, Reservation} from './components/test/NameForm';

import Calculator from './components/test/BoilingVerdict';

import {FancyBorder, WelcomeDialog, Dialog, SignUpDialog} from './components/test/Combination&Inherit';

import registerServiceWorker from './registerServiceWorker';

// 	ReactDOM.render(<App name="World" />, document.getElementById('root'));

// 组件和props
// function tick() {
//   	const element = (
// 	    <div>
// 	      	<h1>Hello, world!</h1>
// 	      	<h2>It is {new Date().toLocaleTimeString()}.</h2>
// 	    </div>
//   	);

// 	ReactDOM.render(element, document.getElementById('root'));
// }

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);


// state和生命周期
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  // state更新是异步的
  // Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });
// Correct
// this.setState((prevState, props) =》 {
//     counter: prevState.counter + props.increment
// });

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// props是父 => 子组件的数据流
// state是组件内部的数据流

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// 事件处理
// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Popper />,
//   document.getElementById('root')
// );


// 列表渲染
function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />

      )}
    </ul>
  );
}

// ReactDOM.render(
//   <NumberList numbers={[1,2,3,4,5,6,7]} />,
//   document.getElementById('root')
// );


// 表单
const el = (
		<div>
			<NameForm />
	  		<FlavorForm />	
	  		<Reservation />
  		</div>	
	)

// ReactDOM.render(
//   el,
//   document.getElementById('root')
// );


// 状态提升
// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );


// 组合
const comb = (
	<div>
		<WelcomeDialog />
		<SignUpDialog />
	</div>
)

ReactDOM.render(
  comb,
  document.getElementById('root')
);

registerServiceWorker();
