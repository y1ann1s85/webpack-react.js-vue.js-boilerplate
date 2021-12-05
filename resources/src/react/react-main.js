import React, { useState, useEffect } from "react";
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import useSetSessionData from './custom-hooks/useSetSessionData.js';
import Home from './components/home.js';
import RouteA from './components/routeA.js';
import RouteB from './components/routeB.js';
import RouteC from './components/routeC.js';

function ReactMain() {

    const [ firstLoad, setFirstLoad ] = useState(true);
    const history = useHistory();

    // Set routes programmatically
    const setRoute = (route) => {
        history.push(route);
    };

    // Back button functionality
    const backToSelection = () => {
        if (history.location.pathname !== '/') {
            history.go(-1);
            return;
        }
        if (sessionStorage.getItem('sessionData')) {
            sessionStorage.removeItem('sessionData');
        }
        window.location.reload();
    };

    useEffect(() => {
        // If the component mounted for the first time check the sessionData 
        // and the user comes from a refresh redirect using the history value on sessionData
        if (firstLoad) {
            if (sessionStorage.getItem('sessionData')) {
                try {
                    let data = JSON.parse(sessionStorage.getItem('sessionData'));
                    if (data.href === window.location.href) {
                        setRoute(data.history);
                    };
                } catch(e) {
                    sessionStorage.removeItem('sessionData');
                };
                return;
            };
            useSetSessionData('/', window.location.href);
        }
        setFirstLoad(false);
    }, []);
    
    return (

        <div>

            <button onClick={ backToSelection } id="back-to-selection" className="button-primary">
                <svg width="10" height="10">
                    <use xlinkHref="#back"/>
                </svg>           
                <span>
                    Back
                </span> 
            </button>
            
            <Switch>

                <Route exact path="/">
                    <Home setRoute = { setRoute }/>
                </Route>

                <Route exact path="/a.html">
                    <RouteA/>
                </Route>

                <Route exact path="/b.html">
                    <RouteB/>
                </Route>

                <Route exact path="/c.html">
                    <RouteC/>
                </Route>

            </Switch>

        </div>

    );

}

export default ReactMain;