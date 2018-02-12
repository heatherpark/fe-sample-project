import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './font-awesome/css/font-awesome.min.css';
import App from './components/container/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
