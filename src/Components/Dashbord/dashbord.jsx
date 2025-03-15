const Dashbord = (props) => {

return(
    <>
        <main className="main-wrapper">
            <div className="main-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">آنالیز</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="javascript:;"></a></li>
                                <li className="breadcrumb-item active" aria-current="page">داشبورد</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="ms-auto">
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary">تنظیمات</button>
                            <button type="button"
                                    className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown">
                                <span className="visually-hidden">تغییر منو کشویی</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                                <a className="dropdown-item" href="javascript:;">عملیات</a>
                                <a className="dropdown-item" href="javascript:;">عملیات دیگر</a>
                                <a className="dropdown-item" href="javascript:;">چیزی دیگر اینجا</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="javascript:;">لینک جدا شده</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xxl-8 d-flex align-items-stretch">
                        <div className="card w-100 overflow-hidden rounded-4">
                            <div className="card-body position-relative p-4">
                                <div className="row">
                                    <div className="col-12 col-sm-7">
                                        <div className="d-flex align-items-center gap-3 mb-5">
                                            <img src="assets/images/avatars/01.png"
                                                 className="rounded-circle bg-grd-info p-1" width="60" height="60"
                                                 alt="user"/>
                                            <div className="">
                                                <p className="mb-0 fw-semibold">خوش آمدید</p>
                                                <h4 className="fw-semibold mb-0 fs-4 mb-0">جان اندرسون!</h4>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-5">
                                            <div className="">
                                                <h4 className="mb-1 fw-semibold d-flex align-content-center">65,000
                                                    تومان<i
                                                        className="ti ti-arrow-up-right fs-5 lh-base text-success"></i>
                                                </h4>
                                                <p className="mb-3">فروش امروز</p>
                                                <div className="progress mb-0"  style={{height:'5px'}} />
                                                    <div className="progress-bar bg-grd-success" role="progressbar"
                                                         style={{width: '60%'}} aria-valuenow="25" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="vr"></div>
                                            <div className="">
                                                <h4 className="mb-1 fw-semibold d-flex align-content-center">۷۸.۴%<i
                                                    className="ti ti-arrow-up-right fs-5 lh-base text-success"></i>
                                                </h4>
                                                <p className="mb-3">نرخ رشد</p>
                                                <div className="progress mb-0" style={{height:'5px'}}>
                                                    <div className="progress-bar bg-grd-danger" role="progressbar"
                                                          style={{width: '60%'}} aria-valuenow="25" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-5">
                                        <div className="welcome-back-img pt-4">
                                            <img src="assets/images/gallery/welcome-back-3.png" height="180" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-xxl-2 d-flex align-items-stretch">
                        <div className="card w-100 rounded-4">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <div className="">
                                        <h5 className="mb-0">۴۲.۵K</h5>
                                        <p className="mb-0">کاربران فعال</p>
                                    </div>
                                    <div className="dropdown">
                                        <a href="javascript:;"
                                           className="dropdown-toggle-nocaret options dropdown-toggle"
                                           data-bs-toggle="dropdown">
                                            <span className="material-icons-outlined fs-5">more_vert</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:;">عملیات</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">عملیات دیگر</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">چیز دیگری</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="chart-container2">
                                    <div id="chart1"></div>
                                </div>
                                <div className="text-center">
                                    <p className="mb-0 font-12">۲۴K کاربر نسبت به ماه گذشته افزایش داشته‌اند</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-xxl-2 d-flex align-items-stretch">
                        <div className="card w-100 rounded-4">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between mb-3">
                                    <div className="">
                                        <h5 className="mb-0">۹۷.۴K</h5>
                                        <p className="mb-0">کل کاربران</p>
                                    </div>
                                    <div className="dropdown">
                                        <a href="javascript:;"
                                           className="dropdown-toggle-nocaret options dropdown-toggle"
                                           data-bs-toggle="dropdown">
                                            <span className="material-icons-outlined fs-5">more_vert</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:;">عملیات</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">عملیات دیگر</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">چیز دیگری</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="chart-container2">
                                    <div id="chart2"></div>
                                </div>
                                <div className="text-center">
                                    <p className="mb-0 font-12"><span className="text-success me-1">۱۲.۵%</span> از ماه
                                        گذشته</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
                        <div className="card w-100 rounded-4">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="mb-0">درآمد ماهانه</h6>
                                </div>
                                <div className="mt-4" id="chart5"></div>
                                <p>میانگین فروش ماهانه برای هر نویسنده</p>
                                <div className="d-flex align-items-center gap-3 mt-4">
                                    <div className="">
                                        <h1 className="mb-0 text-primary">۶۸.۹%</h1>
                                    </div>
                                    <div className="d-flex align-items-center align-self-end">
                                        <p className="mb-0 text-success">۳۴.۵%</p>
                                        <span className="material-icons-outlined text-success">expand_less</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
                        <div className="card w-100 rounded-4">
                            <div className="card-body">
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div className="">
                                            <h5 className="mb-0">نوع دستگاه</h5>
                                        </div>
                                        <div className="dropdown">
                                            <a href="javascript:;"
                                               className="dropdown-toggle-nocaret options dropdown-toggle"
                                               data-bs-toggle="dropdown">
                                                <span className="material-icons-outlined fs-5">more_vert</span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="javascript:;">عملیات</a></li>
                                                <li><a className="dropdown-item" href="javascript:;">عملیات دیگر</a>
                                                </li>
                                                <li><a className="dropdown-item" href="javascript:;">چیز دیگری</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="position-relative">
                                        <div className="piechart-legend">
                                            <h2 className="mb-1">۶۸٪</h2>
                                            <h6 className="mb-0">کل بازدیدها</h6>
                                        </div>
                                        <div id="chart6"></div>
                                    </div>
                                    <div className="d-flex flex-column gap-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p className="mb-0 d-flex align-items-center gap-2 w-25"><span
                                                className="material-icons-outlined fs-6 text-primary">desktop_windows</span>دسکتاپ
                                            </p>
                                            <div className="">
                                                <p className="mb-0">۳۵٪</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p className="mb-0 d-flex align-items-center gap-2 w-25"><span
                                                className="material-icons-outlined fs-6 text-danger">tablet_mac</span>تبلت
                                            </p>
                                            <div className="">
                                                <p className="mb-0">۴۸٪</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p className="mb-0 d-flex align-items-center gap-2 w-25"><span
                                                className="material-icons-outlined fs-6 text-success">phone_android</span>موبایل
                                            </p>
                                            <div className="">
                                                <p className="mb-0">۲۷٪</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="card w-100 rounded-4">
                                    <div className="card-body">
                                        <div className="d-flex align-items-start justify-content-between mb-1">
                                            <div className="">
                                                <h5 className="mb-0">۸۲.۷K</h5>
                                                <p className="mb-0">کل کلیک‌ها</p>
                                            </div>
                                            <div className="dropdown">
                                                <a href="javascript:;"
                                                   className="dropdown-toggle-nocaret options dropdown-toggle"
                                                   data-bs-toggle="dropdown">
                                                    <span className="material-icons-outlined fs-5">more_vert</span>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="javascript:;">عملیات</a></li>
                                                    <li><a className="dropdown-item" href="javascript:;">عملیات دیگر</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">چیز دیگری</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="chart-container2">
                                            <div id="chart3"></div>
                                        </div>
                                        <div className="text-center">
                                            <p className="mb-0 font-12"><span
                                                className="text-success me-1">۱۲.۵٪</span> از ماه گذشته</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 d-flex align-items-stretch">
                                <div className="card w-100 rounded-4">
                                    <div className="card-body">
                                        <div className="d-flex align-items-start justify-content-between mb-1">
                                            <div className="">
                                                <h5 className="mb-0">۶۸.۴K</h5>
                                                <p className="mb-0">کل بازدیدها</p>
                                            </div>
                                            <div className="dropdown">
                                                <a href="javascript:;"
                                                   className="dropdown-toggle-nocaret options dropdown-toggle"
                                                   data-bs-toggle="dropdown">
                                                    <span className="material-icons-outlined fs-5">more_vert</span>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="javascript:;">عملیات</a></li>
                                                    <li><a className="dropdown-item" href="javascript:;">عملیات دیگر</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">چیز دیگری</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="chart-container2">
                                            <div id="chart4"></div>
                                        </div>
                                        <div className="text-center">
                                            <p className="mb-0 font-12">۳۵ هزار کاربر از ماه گذشته اضافه شده است</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card rounded-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <div className="">
                                        <h3 className="mb-0">۸۵,۲۴۷</h3>
                                    </div>
                                    <div className="flex-grow-0">
                                        <p
                                            className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-success text-success bg-opacity-10">
                                            <span className="material-icons-outlined fs-6">arrow_downward</span>۲۳.۷٪
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-0">کل حساب‌ها</p>
                                <div id="chart7"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
                        <div className="card w-100 rounded-4">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between mb-3">
                                    <div className="">
                                        <h6 className="mb-0 fw-bold">آمار کمپین‌ها</h6>
                                    </div>
                                    <div className="dropdown">
                                        <a href="javascript:;"
                                           className="dropdown-toggle-nocaret options dropdown-toggle"
                                           data-bs-toggle="dropdown">
                                            <span className="material-icons-outlined fs-5">more_vert</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:;">عملیات</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">عملیات دیگر</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">چیزی دیگر</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0 bg-transparent">
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-primary">
                                                <span
                                                    className="material-icons-outlined text-white">calendar_today</span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">کمپین‌ها</h6>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <p className="mb-0">54</p>
                                                <p className="mb-0 fw-bold text-success">28%</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 bg-transparent">
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-success">
                                                <span className="material-icons-outlined text-white">email</span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">ایمیل شده</h6>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <p className="mb-0">245</p>
                                                <p className="mb-0 fw-bold text-danger">15%</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 bg-transparent">
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-branding">
                                                <span className="material-icons-outlined text-white">open_in_new</span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">باز شده</h6>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <p className="mb-0">54</p>
                                                <p className="mb-0 fw-bold text-success">30.5%</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 bg-transparent">
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-warning">
                                                <span className="material-icons-outlined text-white">ads_click</span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">کلیک شده</h6>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <p className="mb-0">859</p>
                                                <p className="mb-0 fw-bold text-danger">34.6%</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 bg-transparent">
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-info">
                                                <span
                                                    className="material-icons-outlined text-white">subscriptions</span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">مشترک شده</h6>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <p className="mb-0">24,758</p>
                                                <p className="mb-0 fw-bold text-success">53%</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 bg-transparent">
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-danger">
                                                <span className="material-icons-outlined text-white">inbox</span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">پیام هرزنامه</h6>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <p className="mb-0">548</p>
                                                <p className="mb-0 fw-bold text-danger">47%</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 bg-transparent">
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-deep-blue">
                                                <span className="material-icons-outlined text-white">visibility</span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">بازدیدهای ایمیل‌ها</h6>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <p className="mb-0">9845</p>
                                                <p className="mb-0 fw-bold text-success">68%</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
                        <div className="card w-100 rounded-4">
                            <div className="card-body">
                                <div id="chart8"></div>
                                <div className="d-flex align-items-center gap-3 mt-4">
                                    <div className="">
                                        <h1 className="mb-0">36.7%</h1>
                                    </div>
                                    <div className="d-flex align-items-center align-self-end gap-2">
                                        <span className="material-icons-outlined text-success">trending_up</span>
                                        <p className="mb-0 text-success">34.5%</p>
                                    </div>
                                </div>
                                <p className="mb-4">رشد بازدیدکنندگان</p>
                                <div className="d-flex flex-column gap-3">
                                    <div className="">
                                        <p className="mb-1">کلیک‌ها <span className="float-end">2589</span></p>
                                        <div className="progress" style={{height: '5px'}}>
                                            <div className="progress-bar bg-grd-primary"  style={{width: '60%'}}></div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="mb-1">پسندیده‌ها <span className="float-end">6748</span></p>
                                        <div className="progress" style={{height: '5px'}}>
                                            <div className="progress-bar bg-grd-warning"  style={{width: '55%'}}></div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="mb-1">امتیازها <span className="float-end">9842</span></p>
                                        <div className="progress" style={{height: '5px'}}>
                                            <div className="progress-bar bg-grd-info"  style={{width: '45%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
                        <div className="card w-100 rounded-4">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between mb-3">
                                    <div className="">
                                        <h5 className="mb-0 fw-bold">سرنخ‌های اجتماعی</h5>
                                    </div>
                                    <div className="dropdown">
                                        <a href="javascript:;"
                                           className="dropdown-toggle-nocaret options dropdown-toggle"
                                           data-bs-toggle="dropdown">
                                            <span className="material-icons-outlined fs-5">more_vert</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:;">عملیات</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">عملیات دیگر</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">چیزی دیگر اینجا</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-between gap-4">
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-3 flex-grow-1">
                                            <img src="assets/images/apps/17.png" width="32" alt=""/>
                                            <p className="mb-0">فیس‌بوک</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 fs-6">۵۵٪</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 data-attributes">
                                                <span
                                                    data-peity='{ "fill": ["#0d6efd", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-3 flex-grow-1">
                                            <img src="assets/images/apps/18.png" width="32" alt=""/>
                                            <p className="mb-0">لینکدین</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 fs-6">۶۷٪</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 data-attributes">
                                                <span
                                                    data-peity='{ "fill": ["#fc185a", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-3 flex-grow-1">
                                            <img src="assets/images/apps/19.png" width="32" alt=""/>
                                            <p className="mb-0">اینستاگرام</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 fs-6">۷۸٪</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 data-attributes">
                                                <span
                                                    data-peity='{ "fill": ["#02c27a", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-3 flex-grow-1">
                                            <img src="assets/images/apps/20.png" width="32" alt=""/>
                                            <p className="mb-0">اسنپ‌چت</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 fs-6">۴۶٪</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 data-attributes">
                                                <span
                                                    data-peity='{ "fill": ["#fd7e14", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-3 flex-grow-1">
                                            <img src="assets/images/apps/05.png" width="32" alt=""/>
                                            <p className="mb-0">گوگل</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 fs-6">۳۸٪</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 data-attributes">
                                                <span
                                                    data-peity='{ "fill": ["#0dcaf0", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-3 flex-grow-1">
                                            <img src="assets/images/apps/08.png" width="32" alt=""/>
                                            <p className="mb-0">آلتابا</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 fs-6">۱۵٪</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 data-attributes">
                                                <span
                                                    data-peity='{ "fill": ["#6f42c1", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-3 flex-grow-1">
                                            <img src="assets/images/apps/07.png" width="32" alt=""/>
                                            <p className="mb-0">اسپاتیفای</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 fs-6">۱۲٪</p>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 data-attributes">
                                                <span
                                                    data-peity='{ "fill": ["#ff00b3", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
                        <div className="card w-100 rounded-4">
                            <div className="card-header border-0 p-3 border-bottom">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div className="">
                                        <h5 className="mb-0">کاربران جدید</h5>
                                    </div>
                                    <div className="dropdown">
                                        <a href="javascript:;"
                                           className="dropdown-toggle-nocaret options dropdown-toggle"
                                           data-bs-toggle="dropdown">
                                            <span className="material-icons-outlined fs-5">more_vert</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:;">عملیات</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">عملیات دیگر</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">چیزی دیگر اینجا</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="user-list p-3">
                                    <div className="d-flex flex-column gap-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <img src="assets/images/avatars/01.png" width="45" height="45"
                                                 className="rounded-circle" alt=""/>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">الون جونادو</h6>
                                                <p className="mb-0">elon_deo</p>
                                            </div>
                                            <div className="form-check form-check-inline me-0">
                                                <input className="form-check-input ms-0" type="checkbox"/>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <img src="assets/images/avatars/02.png" width="45" height="45"
                                                 className="rounded-circle" alt=""/>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">الکزندر کلیتو</h6>
                                                <p className="mb-0">zli_alexzender</p>
                                            </div>
                                            <div className="form-check form-check-inline me-0">
                                                <input className="form-check-input ms-0" type="checkbox"/>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <img src="assets/images/avatars/03.png" width="45" height="45"
                                                 className="rounded-circle" alt=""/>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">مت کولز</h6>
                                                <p className="mb-0">mat__colz</p>
                                            </div>
                                            <div className="form-check form-check-inline me-0">
                                                <input className="form-check-input ms-0" type="checkbox"/>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <img src="assets/images/avatars/04.png" width="45" height="45"
                                                 className="rounded-circle" alt=""/>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">لیما دلین</h6>
                                                <p className="mb-0">delinlima</p>
                                            </div>
                                            <div className="form-check form-check-inline me-0">
                                                <input className="form-check-input ms-0" type="checkbox"/>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <img src="assets/images/avatars/05.png" width="45" height="45"
                                                 className="rounded-circle" alt=""/>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">فلیکس لیما</h6>
                                                <p className="mb-0">lima_felix</p>
                                            </div>
                                            <div className="form-check form-check-inline me-0">
                                                <input className="form-check-input ms-0" type="checkbox"/>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <img src="assets/images/avatars/06.png" width="45" height="45"
                                                 className="rounded-circle" alt=""/>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">جیسون کیون</h6>
                                                <p className="mb-0">jason-kym</p>
                                            </div>
                                            <div className="form-check form-check-inline me-0">
                                                <input className="form-check-input ms-0" type="checkbox"/>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <img src="assets/images/avatars/07.png" width="45" height="45"
                                                 className="rounded-circle" alt=""/>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">جیسن گورد</h6>
                                                <p className="mb-0">grd_jason</p>
                                            </div>
                                            <div className="form-check form-check-inline me-0">
                                                <input className="form-check-input ms-0" type="checkbox"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-xxl-8 d-flex align-items-stretch">
                        <div className="card w-100 rounded-4">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between mb-3">
                                    <div className="">
                                        <h5 className="mb-0">سفارشات اخیر</h5>
                                    </div>
                                    <div className="dropdown">
                                        <a href="javascript:;"
                                           className="dropdown-toggle-nocaret options dropdown-toggle"
                                           data-bs-toggle="dropdown">
                                            <span className="material-icons-outlined fs-5">more_vert</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:;">عملیات</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">عملیات دیگر</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">چیزی دیگر اینجا</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="order-search position-relative my-3">
                                    <input className="form-control rounded-5 px-5" type="text" placeholder="جستجو"/>
                                    <span
                                        className="material-icons-outlined position-absolute ms-3 translate-middle-y start-0 top-50">search</span>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-middle">
                                        <thead>
                                        <tr>
                                            <th>نام آیتم</th>
                                            <th>مبلغ</th>
                                            <th>فروشنده</th>
                                            <th>وضعیت</th>
                                            <th>رتبه</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="">
                                                        <img src="assets/images/top-products/01.png"
                                                             className="rounded-circle" width="50" height="50" alt=""/>
                                                    </div>
                                                    <p className="mb-0">کفش‌های ورزشی</p>
                                                </div>
                                            </td>
                                            <td>۱۴۹$</td>
                                            <td>جولیا سونوتا</td>
                                            <td>
                                                <p className="dash-lable mb-0 bg-success bg-opacity-10 text-success rounded-2">تکمیل
                                                    شده</p>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="mb-0">۵.۰</p>
                                                    <i className="material-icons-outlined text-warning fs-6">star</i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="">
                                                        <img src="assets/images/top-products/02.png"
                                                             className="rounded-circle" width="50" height="50" alt=""/>
                                                    </div>
                                                    <p className="mb-0">ساعت طلایی</p>
                                                </div>
                                            </td>
                                            <td>۱۶۸$</td>
                                            <td>جولیا سونوتا</td>
                                            <td>
                                                <p className="dash-lable mb-0 bg-success bg-opacity-10 text-success rounded-2">تکمیل
                                                    شده</p>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="mb-0">۵.۰</p>
                                                    <i className="material-icons-outlined text-warning fs-6">star</i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="">
                                                        <img src="assets/images/top-products/03.png"
                                                             className="rounded-circle" width="50" height="50" alt=""/>
                                                    </div>
                                                    <p className="mb-0">تی‌شرت پولو مردانه</p>
                                                </div>
                                            </td>
                                            <td>۱۲۴$</td>
                                            <td>جولیا سونوتا</td>
                                            <td>
                                                <p className="dash-lable mb-0 bg-warning bg-opacity-10 text-warning rounded-2">در
                                                    انتظار</p>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="mb-0">۴.۰</p>
                                                    <i className="material-icons-outlined text-warning fs-6">star</i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="">
                                                        <img src="assets/images/top-products/04.png"
                                                             className="rounded-circle" width="50" height="50" alt=""/>
                                                    </div>
                                                    <p className="mb-0">شلوار جین آبی کژوال</p>
                                                </div>
                                            </td>
                                            <td>۲۸۹$</td>
                                            <td>جولیا سونوتا</td>
                                            <td>
                                                <p className="dash-lable mb-0 bg-success bg-opacity-10 text-success rounded-2">تکمیل
                                                    شده</p>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="mb-0">۳.۰</p>
                                                    <i className="material-icons-outlined text-warning fs-6">star</i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="">
                                                        <img src="assets/images/top-products/06.png"
                                                             className="rounded-circle" width="50" height="50" alt=""/>
                                                    </div>
                                                    <p className="mb-0">پیراهن‌های فانتزی</p>
                                                </div>
                                            </td>
                                            <td>۳۸۹$</td>
                                            <td>جولیا سونوتا</td>
                                            <td>
                                                <p className="dash-lable mb-0 bg-danger bg-opacity-10 text-danger rounded-2">لغو
                                                    شده</p>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="mb-0">۲.۰</p>
                                                    <i className="material-icons-outlined text-warning fs-6">star</i>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
      
        </main>

        <div className="overlay btn-toggle"></div>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart">
            <div className="offcanvas-header border-bottom h-70">
                <h5 className="mb-0" id="offcanvasRightLabel">۸ سفارش جدید</h5>
                <a href="javascript:;" className="primaery-menu-close" data-bs-dismiss="offcanvas">
                    <i className="material-icons-outlined">close</i>
                </a>
            </div>
            <div className="offcanvas-body p-0">
                <div className="order-list">
                    <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
                        <div className="order-img">
                            <img src="assets/images/orders/01.png" className="img-fluid rounded-3" width="75" alt=""/>
                        </div>
                        <div className="order-info flex-grow-1">
                            <h5 className="mb-1 order-title">کفش مردانه سفید</h5>
                            <p className="mb-0 order-price">۲۸۹ دلار</p>
                        </div>
                        <div className="d-flex">
                            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
                            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
                        </div>
                    </div>

                    <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
                        <div className="order-img">
                            <img src="assets/images/orders/02.png" className="img-fluid rounded-3" width="75" alt=""/>
                        </div>
                        <div className="order-info flex-grow-1">
                            <h5 className="mb-1 order-title">ایرپاد قرمز</h5>
                            <p className="mb-0 order-price">۱۴۹ دلار</p>
                        </div>
                        <div className="d-flex">
                            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
                            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
                        </div>
                    </div>

                    <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
                        <div className="order-img">
                            <img src="assets/images/orders/03.png" className="img-fluid rounded-3" width="75" alt=""/>
                        </div>
                        <div className="order-info flex-grow-1">
                            <h5 className="mb-1 order-title">تی‌شرت مردانه</h5>
                            <p className="mb-0 order-price">۱۳۹ دلار</p>
                        </div>
                        <div className="d-flex">
                            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
                            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
                        </div>
                    </div>

                    <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
                        <div className="order-img">
                            <img src="assets/images/orders/04.png" className="img-fluid rounded-3" width="75" alt=""/>
                        </div>
                        <div className="order-info flex-grow-1">
                            <h5 className="mb-1 order-title">جین آبی کژوال</h5>
                            <p className="mb-0 order-price">۴۸۵ دلار</p>
                        </div>
                        <div className="d-flex">
                            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
                            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
                        </div>
                    </div>

                    <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
                        <div className="order-img">
                            <img src="assets/images/orders/05.png" className="img-fluid rounded-3" width="75" alt=""/>
                        </div>
                        <div className="order-info flex-grow-1">
                            <h5 className="mb-1 order-title">پیراهن‌های شیک</h5>
                            <p className="mb-0 order-price">۷۵۸ دلار</p>
                        </div>
                        <div className="d-flex">
                            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
                            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
                        </div>
                    </div>

                    <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
                        <div className="order-img">
                            <img src="assets/images/orders/06.png" className="img-fluid rounded-3" width="75" alt=""/>
                        </div>
                        <div className="order-info flex-grow-1">
                            <h5 className="mb-1 order-title">ست مبل خانگی</h5>
                            <p className="mb-0 order-price">۵۴۶ دلار</p>
                        </div>
                        <div className="d-flex">
                            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
                            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
                        </div>
                    </div>

                    <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
                        <div className="order-img">
                            <img src="assets/images/orders/07.png" className="img-fluid rounded-3" width="75" alt=""/>
                        </div>
                        <div className="order-info flex-grow-1">
                            <h5 className="mb-1 order-title">آیفون مشکی</h5>
                            <p className="mb-0 order-price">۱۰۴۹ دلار</p>
                        </div>
                        <div className="d-flex">
                            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
                            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
                        </div>
                    </div>

                    <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
                        <div className="order-img">
                            <img src="assets/images/orders/08.png" className="img-fluid rounded-3" width="75" alt=""/>
                        </div>
                        <div className="order-info flex-grow-1">
                            <h5 className="mb-1 order-title">ساعت طلایی</h5>
                            <p className="mb-0 order-price">۶۸۹ دلار</p>
                        </div>
                        <div className="d-flex">
                            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
                            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-footer h-70 p-3 border-top">
                <div className="d-grid">
                    <button type="button" className="btn btn-grd btn-grd-primary" data-bs-dismiss="offcanvas">مشاهده
                        محصولات
                    </button>
                </div>
            </div>
        </div>
        <button class="btn btn-grd btn-grd-primary position-fixed bottom-0 end-0 m-3 d-flex align-items-center gap-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop">
            <i class="material-icons-outlined">tune</i>سفارشی‌سازی
        </button>

        <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="staticBackdrop">
            <div class="offcanvas-header border-bottom h-70">
                <div class="">
                    <h5 class="mb-0">تنظیم‌کننده تم</h5>
                    <p class="mb-0">تم خود را سفارشی کنید</p>
                </div>
                <a href="javascript:;" class="primaery-menu-close" data-bs-dismiss="offcanvas">
                    <i class="material-icons-outlined">close</i>
                </a>
            </div>
            </div>
    </>
)
}

export default Dashbord;