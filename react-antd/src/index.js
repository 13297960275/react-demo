import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './pages/demo/LifeCycle';
// import Admin from './admin.js';
import RouterDemo from './pages/router_demo/route1/Home.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterDemo />, document.getElementById('root'));
registerServiceWorker();