import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Home from "./Home";
import Video from "./Video";

export default function PageLayout() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path='/gallery' component={Gallery} />
                <Route path="/video" component={Video} />
            </Switch>
        </BrowserRouter>
    )
}