import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Home from "./Home";
import Video from "./Video";

export default function PageLayout() {
    return (
        <BrowserRouter>
            <nav className="bg-blue-400">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!--Mobile menu button --> */}
                            <button type="button" className="inline-flex items-center p-2 rounded-md text-gray-400 0 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <Link to="home"> <span className="block h-8 w-auto text-white" >Wedding</span></Link>
                            </div>  <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <Link to="/home" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>
                                    <Link to="/gallery" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
                                    <Link to="/video" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Video</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route path="/video">
                    <Video />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}