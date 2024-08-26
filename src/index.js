import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/homepage';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './routers';
import "./style/style.scss";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<RouterCustom/>
</BrowserRouter>
);


