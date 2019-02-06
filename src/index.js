import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


axios.defaults.baseURL='https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(request=>{
    console.log(request);
    return request;
    },error => {
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(responce=>{
    console.log(responce);
    return responce;
    },error => {
        console.log(error);
        return Promise.reject(error)
    }
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
