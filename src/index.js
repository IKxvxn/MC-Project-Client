import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import App from './App';
import Spanish from 'antd/lib/locale-provider/es_ES';
import Store from './Store'
import registerServiceWorker from './registerServiceWorker';
import './style/antd.css'

ReactDOM.render(

    <Provider store={Store}>
        <BrowserRouter>
            <ConfigProvider locale={Spanish}>
                <App />
            </ConfigProvider>
        </BrowserRouter>
    </Provider>


, document.getElementById('root'));
registerServiceWorker();
