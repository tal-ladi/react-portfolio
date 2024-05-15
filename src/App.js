import 'primeflex/primeflex.css';
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {ROUTES} from "./core/models/routes";
import Home from "./features/home/home";
import Navbar from "./core/components/navbar/navbar";
import Skills from "./features/skills/skills";

function App() {
    return (
        <div className='App'>
            <Navbar/>
            <Routes>
                <Route path="*" element={<Navigate to={ROUTES.HOME} replace={true} />}/>
                <Route path={ROUTES.HOME} element={<Home/>}/>
                <Route path={ROUTES.SKILLS} element={<Skills/>}/>
            </Routes>
        </div>
    )
        ;
}

export default App;
