import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './Widget';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Widget />, document.getElementById('root'));
registerServiceWorker();
