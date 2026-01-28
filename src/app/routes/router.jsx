import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router";
import SignUp from '../../features/signUp/page/signUp.jsx';

function RouterApp()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/SignUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterApp;