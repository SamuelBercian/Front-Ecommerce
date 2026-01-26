import React from "react";
import { Router as Router, Routes, Route} from "react-router";
import SignUp from '../../features/signUp/page/signUp.jsx';

function RouterApp()
{
    return(
        <Router>
            <Routes>
                <Route path="/SignUp" element={<SignUp/>} />
            </Routes>
        </Router>
    );
};

export default RouterApp;