 // react uses webpack that allows us to use import

import React from 'react'; // this is the robot that handles the view (can be anything)
import ReactDOM from 'react-dom'; // specifically for websites
import './index.css'; // can add css for each component
import Card from './Card.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {robots} from './robots';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
