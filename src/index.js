import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import DataBaseIdb from './component/database';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const p = new DataBaseIdb();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
p.getFromDataBase('GBP_USD');
