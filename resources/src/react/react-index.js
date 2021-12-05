import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactMain from "./react-main.js";
import "../../styles/sass/rest.scss";

ReactDOM.render(
    
    <React.StrictMode>
        <Router>
            <ReactMain/>
        </Router>
    </React.StrictMode>,
    
    document.getElementById('react')

);
