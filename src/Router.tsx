import React from 'react';
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from './Root/Root';
import CV from './Content/CV/CV';
import Overview from './Content/Overview/Overview';
import Showcase from './Content/Showcase/Showcase';
import Besides from './Content/Besides/Besides';
import Works from './Content/Works/Works';

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "CV",
                element: <CV />,
            },
            {
                path: "works",
                element: <Works />,
            },
            {
                path: "/",
                element: <Overview />,
            },
            {
                path: "Showcase",
                element: <Showcase />,
            },
            {
                path: "besides",
                element: <Besides />,
            },
        ],    
    },
]);

export default AppRouter;
