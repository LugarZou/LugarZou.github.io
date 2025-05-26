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