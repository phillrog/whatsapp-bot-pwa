import React from 'react';
import QrCode from './components/qr-code';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Global from './styles/global';
import Home from './components/home'

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const data = [
  {
    id: Math.random(),
    title: "Box titulo 1",
    text: lorem,
    bgColor: "#D5CAFA"
  },
  {
    id: Math.random(),
    title: "Box titulo 2",
    text: lorem,
    bgColor: "#EDA9A9"
  },
  {
    id: Math.random(),
    title: "Box titulo 3",
    text: lorem,
    bgColor: "#F2EE8D"
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    text: lorem,
    bgColor: "#9FEACD"
  }
];

export default function Routes() {
    return (<Router>
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/qrcode">QR Code</Link>
            </ul>
        </div>
    
        <hr />
        <Switch>
            <Route exatc path="/"><Home boxData={data} /></Route>
            <Route exact path="/qrcode"><QrCode /> </Route>
        </Switch>
    </Router>
    );
}