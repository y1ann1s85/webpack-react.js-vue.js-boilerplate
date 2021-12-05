import React, { useEffect } from "react";
import useSetSessionData from '../custom-hooks/useSetSessionData.js';

const RouteB = () => {

    useEffect(() => {
        useSetSessionData('/b.html', window.location.href)
    }, [])

    return (

        <div className="container">
            <div className="home__react">
                <h1>Route B</h1>
            </div>
        </div>

    );

};

export default RouteB;