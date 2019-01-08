import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './pages/demo/LifeCycle';
// import Admin from './admin.js';
// import RouterDemo from './pages/router_demo/route1/Home.js';
import RouterDemo2 from './pages/router_demo/route2/router.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterDemo2 />, document.getElementById('root'));
registerServiceWorker();