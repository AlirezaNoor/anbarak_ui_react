import React, {useEffect, useState} from "react";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import App from "./App";

import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import Login from "./pages/Login";

const AppRouter = () => {
    const [token, setToken] = useState(Cookies.get("token_mokhatab"));
    const [role, setRole] = useState(Cookies.get("role_mokhatab"));
    const [userId, setUserId] = useState(Cookies.get("user_id"));
    const [isFirstTime, setIsFirstTime] = useState(Cookies.get("isfirsttime") === "True");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token);




            } catch (error) {
                console.error("Invalid token:", error);

            }
        }
    }, [token, isFirstTime]);

    const handleLogin = (jwtToken) => {
        try {
            const decodedToken = jwtDecode(jwtToken);



                navigate("/");


        } catch (error) {
            console.error("Login failed:", error);
        }
    };



    return (
        <>
            {token ? (

                    <Routes>
                        <Route path="/" element={<App />}>

                            {/*<Route path="/team" element={<Team />} />*/}
                            {/*<Route path="/contacts" element={<Contacts />} />*/}
                            {/*<Route path="/invoices" element={<Invoices />} />*/}
                            {/*<Route path="/form" element={<Form />} />*/}
                            {/*<Route path="/calendar" element={<Calendar />} />*/}
                            {/*<Route path="/bar" element={<Bar />} />*/}
                            {/*<Route path="/pie" element={<Pie />} />*/}
                            {/*<Route path="/localcontact" element={<Stream />} />*/}
                            {/*<Route path="/localcontactList" element={<UserList/>} />*/}
                            {/*<Route path="/line" element={<Line />} />*/}
                            {/*<Route path="/faq" element={<FAQ />} />*/}
                            {/*<Route path="/FavouriteContact" element={<FavouriteContact/>} />*/}
                            {/*<Route path="/geography" element={<Geography />} />*/}
                            {/*<Route path="/newChat/:id" element={<CreateTicket />} />*/}
                            {/*<Route path="/chat/:id" element={<Createnew />} />*/}
                            {/*<Route path="/createGroup" element={<CreateUserGroup />} />*/}
                            {/*<Route path="/logout" element={<Navigate to="/login" />} />*/}
                            {/*<Route path="*" element={<Navigate to="/" />} />*/}
                        </Route>
                    </Routes>

            ) : (
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                     <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            )}
        </>
    );
};

export default AppRouter;
