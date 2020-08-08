 // react uses webpack that allows us to use import

import React from 'react'; // this is the robot that handles the view (can be anything)
import ReactDOM from 'react-dom'; // specifically for websites
import './index.css'; // can add css for each component
import Hello from './Hello.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <Hello greeting={'Hello ' + 'React Ninja'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
