import React, { useEffect } from "react";
import useSetSessionData from '../custom-hooks/useSetSessionData.js';

const RouteA = () => {

    useEffect(() => {
        useSetSessionData('/a.html', window.location.href)
    })

    return (

        <div className="container">
            <div className="home__react">
                <h1>Route A</h1>
            </div>
        </div>

    );

};

export default RouteA;