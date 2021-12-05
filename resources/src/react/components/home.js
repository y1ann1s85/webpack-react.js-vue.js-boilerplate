import React, { useEffect } from "react";
import useSetSessionData from '../custom-hooks/useSetSessionData.js';

const Home = ( { setRoute } ) => {

    useEffect(() => {
        useSetSessionData('/', window.location.href)
    }, [])

    return(

        <div className="container">

            <div className="home__react">

                <svg className="framework-logo" width="300">
                    <use xlinkHref="#react-logo"/>
                </svg>

                <h1>React.js + React Router</h1>

                <div className="home__react--router-links">
                    <a onClick={ () => setRoute('/a.html') } className="router-link button-primary" to="/a.html">Route A</a>
                    <a onClick={ () => setRoute('/b.html') } className="router-link button-primary" to="/b.html">Route B</a>
                    <a onClick={ () => setRoute('/c.html') }className="router-link button-primary" to="/c.html">Route C</a>
                </div>

            </div>

        </div>

    );

}

export default Home;