import React from 'react';
import './App.css';
import AppRouter from './Router';
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";


const rootElement = document.getElementById("root");



function App() {
    if (rootElement) {
        ReactDOM.createRoot(rootElement).render(
            <React.StrictMode>
                <RouterProvider router={AppRouter} />
            </React.StrictMode>
        );
        return null;
    } else {
        // Handle the case where the element with ID "root" was not found.
        return null;
    }
}

export default App;
