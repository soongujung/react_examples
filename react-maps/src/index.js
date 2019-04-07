import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {RenderAfterNavermapsLoaded} from 'react-naver-maps';

ReactDOM.render(
    <BrowserRouter>
        <RenderAfterNavermapsLoaded ncpClientId='7fsdkjz4mn'>
            <App />
        </RenderAfterNavermapsLoaded>
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
