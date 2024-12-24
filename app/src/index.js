import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home/Home';
import { Process } from './Process/Process';
import { AboutUs } from "./About Us/AboutUs";
import { Projects } from "./Projects/Projects";
import { Services } from "./Services/Services";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/process' element={<Process/>}></Route>
                <Route path="/about-us" element={<AboutUs/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
