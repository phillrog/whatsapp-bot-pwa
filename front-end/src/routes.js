import React from 'react';
import QrCode from './components/qr-code';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Routes() {
    return (<Router>
        <div>
            <ul>
                <Link to="/">Home</Link>
            </ul>
        </div>
    
        <hr />
        <Switch>
            <Route exact path="/"><QrCode /> </Route>
        </Switch>
    </Router>
    );
}