import React, { useEffect } from "react";
import useSetSessionData from '../custom-hooks/useSetSessionData.js';

const RouteC = () => {

    useEffect(() => {
        useSetSessionData('/c.html', window.location.href)
    })

    return (

        <div className="container">
            <div className="home__react">
                <h1>Route C</h1>
            </div>
        </div>

    );

};

export default RouteC;