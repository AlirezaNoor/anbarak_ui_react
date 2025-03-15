 

const Login = () => {
    return (
        <>
            <div className="auth-basic-wrapper d-flex align-items-center justify-content-center">
                <div className="container-fluid my-5 my-lg-0">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
                            <div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
                                <div>
                                    <div className="card-body p-5" style={{ maxHeight: '500px' }}>
                                        <img src="assets/images/logo1.png" className="mb-4" width="145" alt="" />
                                        <h4 className="fw-bold">شروع کنید</h4>
                                        <p className="mb-0">برای ورود به حساب خود اطلاعات را وارد کنید</p>

                                        <div className="form-body my-5">
                                            <form className="row g-3">
                                                <div className="col-12">
                                                    <label htmlFor="inputEmailAddress" className="form-label">ایمیل</label>
                                                    <input type="email" className="form-control" id="inputEmailAddress"
                                                           placeholder="jhon@example.com" />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="inputChoosePassword" className="form-label">رمز عبور</label>
                                                    <div className="input-group" id="show_hide_password">
                                                        <input type="password" className="form-control border-end-0"
                                                               id="inputChoosePassword"
                                                               placeholder="رمز عبور را وارد کنید" />
                                                        <a href="#" className="input-group-text bg-transparent">
                                                            <i className="bi bi-eye-slash-fill"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox"
                                                               id="flexSwitchCheckChecked" />
                                                        <label className="form-check-label"
                                                               htmlFor="flexSwitchCheckChecked">مرا به خاطر بسپار</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 text-end">
                                                    <a href="auth-basic-forgot-password.html">رمز عبور را فراموش کرده‌اید؟</a>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button type="submit" className="btn btn-grd-primary">ورود</button>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="text-start">
                                                        <p className="mb-0">هنوز حساب کاربری ندارید؟ <a
                                                            href="auth-basic-register.html">ایجاد حساب</a></p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="separator section-padding">
                                            <div className="line"></div>
                                            <p className="mb-0 fw-bold">یا وارد شوید با</p>
                                            <div className="line"></div>
                                        </div>

                                        <div className="d-flex gap-3 justify-content-center mt-4">
                                            <a href="#" className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-danger">
                                                <i className="bi bi-google fs-5 text-white"></i>
                                            </a>
                                            <a href="#" className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-deep-blue">
                                                <i className="bi bi-facebook fs-5 text-white"></i>
                                            </a>
                                            <a href="#" className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-info">
                                                <i className="bi bi-linkedin fs-5 text-white"></i>
                                            </a>
                                            <a href="#" className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-royal">
                                                <i className="bi bi-github fs-5 text-white"></i>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
