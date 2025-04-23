import React, { useState, useEffect, createContext, useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import App from "./App";
import LoginPage from "./pages/Login";

// ایجاد Context برای مدیریت منو
const MenuContext = createContext();
export const useMenu = () => useContext(MenuContext);

const AppRouter = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const storedToken = Cookies.get("accessToken") || localStorage.getItem("accessToken");

        if (storedToken) {
            try {
                const decodedToken = jwtDecode(storedToken);
                if (decodedToken.exp * 1000 > Date.now()) {
                    setToken(storedToken);
                    const storedMenu = localStorage.getItem("menuNavigation");
                    if (storedMenu) setMenu(JSON.parse(storedMenu));
                } else {
                    handleLogout();
                }
            } catch (error) {
                handleLogout();
            }
        }
    }, []);

    const handleLogin = (jwtToken, menuData, userId) => {
        try {
            jwtDecode(jwtToken);
            Cookies.set("accessToken", jwtToken, { expires: 7 });
            Cookies.set("userId", userId);
            Cookies.set("menuNavigation", JSON.stringify(menuData));
            setToken(jwtToken); // برای ری‌اکت
            setMenu(menuData);
            window.location.reload();// رفتن به صفحه اصلی
        } catch (error) {
            console.error("Login failed:", error);
        }
    };


    const handleLogout = () => {
        Cookies.remove("accessToken");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("menuNavigation");
        setToken(null);
        setMenu([]);
        navigate("/login");
    };

    return (
        <Routes>
            {token ? (
                <>
                    <Route path="/dashboard" element={<App onLogout={handleLogout} />} />
                    <Route path="/" element={<App onLogout={handleLogout} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </>
            ) : (
                <>
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </>
            )}
        </Routes>

    );
};

export default AppRouter;
