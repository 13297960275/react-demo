import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
// import App from './App';
// import App from './pages/demo/LifeCycle';
// import ReactContext from './pages/demo/reactContext';
// import Admin from './admin.js';
// import RouterDemo from './pages/router_demo/route1/Home.js';
// import RouterDemo2 from './pages/router_demo/route2/router.js';
// import RouterDemo3 from './pages/router_demo/route3/router.js';
import IRouter from "./router";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<IRouter />, document.getElementById("root"));
registerServiceWorker();
