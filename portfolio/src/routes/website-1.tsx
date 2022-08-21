import React from "react";
import { useParams } from "react-router";

interface RouteParams {
    webId: string;
}

function Website_1() {
    const {webId} = useParams<RouteParams>();
    return <h1>Web: {webId}</h1>;
}

export default Website_1;