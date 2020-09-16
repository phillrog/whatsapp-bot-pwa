import React from 'react';
import QrCode from './components/qr-code';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Global from './styles/global';
import Home from './components/home'
import RegisterMessage from './components/register-message-form';

export default function Routes() {
    return (<BrowserRouter>
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/qrcode">QR Code</Link>
                <Link to="/cadastrar">Comandos</Link>
            </ul>
        </div>
    
        <hr />
        <Switch>
            <Route exact={true} path="/" component={Home}></Route>
            <Route  path="/qrcode" component={QrCode}></Route>
            <Route  path="/cadastrar" component={RegisterMessage}></Route>
        </Switch>
    </BrowserRouter>
    );
}