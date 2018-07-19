// import dva from 'dva';
// import './index.css';

// // 1. Initialize
// const app = dva();

// // 2. Plugins
// // app.use({});

// // 3. Model
// // app.model(require('./models/example').default);

// // 4. Router
// app.router(require('./router').default);

// // 5. Start
// app.start('#root');

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
