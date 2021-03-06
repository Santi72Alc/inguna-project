import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import 'tailwindcss/dist/base.min.css';
import 'tailwindcss/dist/components.min.css';
import 'tailwindcss/dist/utilities.min.css';

import "tailwindcss/dist/tailwind.min.css"




import Landing from "views/Landing.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/home' component={Landing} />
      <Redirect from='/' to='/home' />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
