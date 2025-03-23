import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post("http://localhost:5000/api/Security/Login", {
                email,
                password
            });

            if (response.data.code === 200) {
                const { accessToken, menuNavigation } = response.data.content.data;

                // ذخیره توکن در localStorage
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("menuNavigation", JSON.stringify(menuNavigation));

                // انتقال به داشبورد
                window.location.reload();
            } else {
                setError("ایمیل یا رمز عبور اشتباه است.");
            }
        } catch (err) {
            setError("مشکلی در ورود به سیستم رخ داد.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-basic-wrapper d-flex align-items-center justify-content-center">
            <div className="container-fluid my-5 my-lg-0">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
                        <div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
                            <div className="card-body p-5" style={{ maxHeight: "500px" }}>
                                <img src="assets/images/logo1.png" className="mb-4" width="145" alt="Logo" />
                                <h4 className="fw-bold">شروع کنید</h4>
                                <p className="mb-0">برای ورود به حساب خود اطلاعات را وارد کنید</p>

                                {error && <div className="alert alert-danger mt-3">{error}</div>}

                                <div className="form-body my-5">
                                    <form className="row g-3" onSubmit={handleLogin}>
                                        <div className="col-12">
                                            <label htmlFor="inputEmailAddress" className="form-label">ایمیل</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="inputEmailAddress"
                                                placeholder="jhon@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="inputChoosePassword" className="form-label">رمز عبور</label>
                                            <div className="input-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="inputChoosePassword"
                                                    placeholder="رمز عبور را وارد کنید"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-grd-primary" disabled={loading}>
                                                    {loading ? "در حال ورود..." : "ورود"}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="text-start">
                                    <p className="mb-0">
                                        هنوز حساب کاربری ندارید؟ <a href="auth-basic-register.html">ایجاد حساب</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
