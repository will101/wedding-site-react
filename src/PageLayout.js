import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Home from "./Home";
import Video from "./Video";
import Upload from "./Upload";
import Comment from "./Comment";
import UserGallery from "./UserGallery";

export default function PageLayout() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path='/gallery' component={Gallery} />
                <Route path="/video" component={Video} />
                <Route path="/upload" component={Upload} />
                <Route path="/comment" component={Comment} />
                <Route path="/userGallery" component={UserGallery} />
            </Switch>
        </BrowserRouter>
    )
}