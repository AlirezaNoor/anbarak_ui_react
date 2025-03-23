
import { useEffect, useState } from "react";

const Header = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const storedMenu = localStorage.getItem("menuNavigation");
        if (storedMenu) {
            setMenu(JSON.parse(storedMenu));
        }
    }, []);

    return (
        <>
        <header className="top-header">
<nav className="navbar navbar-expand align-items-center gap-4">
    <div className="btn-toggle">
        <a href="#"><i className="material-icons-outlined">menu</i></a>
    </div>
    <div className="search-bar flex-grow-1">
        <div className="position-relative">
            <input
                className="form-control rounded-5 px-5 search-control d-lg-block d-none"
                type="text"
                placeholder="جستجو"
            />
            <span
                className="material-icons-outlined position-absolute d-lg-block d-none ms-3 translate-middle-y start-0 top-50"
            >search</span>
            <span
                className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 search-close"
            >close</span>
            <div className="search-popup p-3">
                <div className="card rounded-4 overflow-hidden">
                    <div className="card-header d-lg-none">
                        <div className="position-relative">
                            <input
                                className="form-control rounded-5 px-5 mobile-search-control"
                                type="text"
                                placeholder="جستجو"
                            />
                            <span
                                className="material-icons-outlined position-absolute ms-3 translate-middle-y start-0 top-50"
                            >search</span>
                            <span
                                className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 mobile-search-close"
                            >close</span>
                        </div>
                    </div>
                    <div className="card-body search-content">
                        <p className="search-title">جستجوهای اخیر</p>
                        <div
                            className="d-flex align-items-start flex-wrap gap-2 kewords-wrapper"
                        >
                            <a href="#" className="kewords"><span>قالب Angular</span><i
                                className="material-icons-outlined fs-6"
                            >search</i></a>
                            <a href="#" className="kewords"><span>داشبورد</span><i
                                className="material-icons-outlined fs-6"
                            >search</i></a>
                            <a href="#" className="kewords"><span>قالب ادمین</span><i
                                className="material-icons-outlined fs-6"
                            >search</i></a>
                            <a href="#" className="kewords"><span>ادمین Bootstrap 5</span><i
                                className="material-icons-outlined fs-6"
                            >search</i></a>
                            <a href="#" className="kewords"><span>تجارت الکترونیک
        HTML</span><i
                                className="material-icons-outlined fs-6"
                            >search</i></a>
                            <a href="#" className="kewords"><span>Sass</span><i
                                className="material-icons-outlined fs-6"
                            >search</i></a>
                            <a href="#" className="kewords"><span>Laravel 9</span><i
                                className="material-icons-outlined fs-6"
                            >search</i></a>
                        </div>
                        <hr/>
                        <p className="search-title">آموزش‌ها</p>
                        <div className="search-list d-flex flex-column gap-2">
                            <div className="search-list-item d-flex align-items-center gap-3">
                                <div className="list-icon">
                                    <i className="material-icons-outlined fs-5">play_circle</i>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 search-list-title">آموزش‌های وردپرس</h5>
                                </div>
                            </div>
                            <div className="search-list-item d-flex align-items-center gap-3">
                                <div className="list-icon">
                                    <i className="material-icons-outlined fs-5">shopping_basket</i>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 search-list-title">آموزش‌های وب‌سایت تجارت
                                        الکترونیک</h5>
                                </div>
                            </div>

                            <div className="search-list-item d-flex align-items-center gap-3">
                                <div className="list-icon">
                                    <i className="material-icons-outlined fs-5">laptop</i>
                                </div>
                                <div className="">
                                    <h5 className="mb-0 search-list-title">طراحی واکنش‌گرا</h5>
                                </div>
                            </div>
                        </div>

                        <hr/>
                        <p className="search-title">اعضا</p>

                        <div className="search-list d-flex flex-column gap-2">
                            <div className="search-list-item d-flex align-items-center gap-3">
                                <div className="memmber-img">
                                    <img
                                        src="assets/images/avatars/01.png"
                                        width="32"
                                        height="32"
                                        className="rounded-circle"
                                        alt=""
                                    />
                                </div>
                                <div className="">
                                    <h5 className="mb-0 search-list-title">اندرو استارک</h5>
                                </div>
                            </div>

                            <div className="search-list-item d-flex align-items-center gap-3">
                                <div className="memmber-img">
                                    <img
                                        src="assets/images/avatars/02.png"
                                        width="32"
                                        height="32"
                                        className="rounded-circle"
                                        alt=""
                                    />
                                </div>
                                <div className="">
                                    <h5 className="mb-0 search-list-title">سنترو جهنیا</h5>
                                </div>
                            </div>

                            <div className="search-list-item d-flex align-items-center gap-3">
                                <div className="memmber-img">
                                    <img
                                        src="assets/images/avatars/03.png"
                                        width="32"
                                        height="32"
                                        className="rounded-circle"
                                        alt=""
                                    />
                                </div>
                                <div className="">
                                    <h5 className="mb-0 search-list-title">میشل کلارک</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center bg-transparent">
                        <a href="#" className="btn w-100">مشاهده تمام نتایج جستجو</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ul className="navbar-nav gap-1 nav-right-links align-items-center">
        <li className="nav-item d-lg-none mobile-search-btn">
            <a className="nav-link" href="#"><i
                className="material-icons-outlined"
            >search</i></a>
        </li>
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                href="#"
                data-bs-toggle="dropdown"
            >
                <img src="assets/images/county/02.png" width="22" alt=""/>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
                <li><a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="#"
                >
                    <img src="assets/images/county/01.png" width="20" alt=""/><span
                    className="ms-2"
                >انگلیسی</span></a>
                </li>
                <li><a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="#"
                >
                    <img src="assets/images/county/02.png" width="20" alt=""/><span
                    className="ms-2"
                >کاتالان</span></a>
                </li>
                <li><a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="#"
                >
                    <img src="assets/images/county/03.png" width="20" alt=""/><span
                    className="ms-2"
                >فرانسوی</span></a>
                </li>
                <li><a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="#"
                >
                    <img src="assets/images/county/04.png" width="20" alt=""/><span
                    className="ms-2"
                >بلیز</span></a>
                </li>
                <li><a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="#"
                >
                    <img src="assets/images/county/05.png" width="20" alt=""/><span
                    className="ms-2"
                >کلمبیا</span></a>
                </li>
                <li><a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="#"
                >
                    <img src="assets/images/county/06.png" width="20" alt=""/><span
                    className="ms-2"
                >اسپانیایی</span></a>
                </li>
                <li><a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="#"
                >
                    <img src="assets/images/county/07.png" width="20" alt=""/><span
                    className="ms-2"
                >گرجی</span></a>
                </li>
                <li><a
                    className="dropdown-item d-flex align-items-center py-2"
                    href="#"
                >
                    <img src="assets/images/county/08.png" width="20" alt=""/><span
                    className="ms-2"
                >هندی</span></a>
                </li>
            </ul>
        </li>

        <li className="nav-item dropdown position-static d-md-flex d-none">
            <a
                className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                data-bs-auto-close="outside"
                data-bs-toggle="dropdown"
                href="#"
            >
                <i className="material-icons-outlined">done_all</i>
            </a>
            <div
                className="dropdown-menu dropdown-menu-end mega-menu shadow-lg p-4 p-lg-5"
            >
                <div className="mega-menu-widgets">
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4 g-lg-5">
                        <div className="col">
                            <div className="card rounded-4 shadow-none border mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="mega-menu-icon flex-shrink-0 bg-danger">
                                            <i className="material-icons-outlined">question_answer</i>
                                        </div>
                                        <div className="mega-menu-content">
                                            <h5>بازاریابی</h5>
                                            <p className="mb-0 f-14">در صنعت چاپ و طراحی گرافیک، Lorem
                                                ipsum یک متن آزمایشی است که معمولاً برای نمایش فرم
                                                ظاهری سند استفاده می‌شود.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card rounded-4 shadow-none border mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start gap-3">
                                        <img
                                            src="assets/images/megaIcons/02.png"
                                            width="40"
                                            alt=""
                                        />
                                        <div className="mega-menu-content">
                                            <h5>وب‌سایت</h5>
                                            <p className="mb-0 f-14">در صنعت چاپ و طراحی گرافیک، Lorem
                                                ipsum یک متن آزمایشی است که معمولاً برای نمایش فرم
                                                ظاهری سند استفاده می‌شود.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card rounded-4 shadow-none border mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start gap-3">
                                        <img
                                            src="assets/images/megaIcons/03.png"
                                            width="40"
                                            alt=""
                                        />
                                        <div className="mega-menu-content">
                                            <h5>مشترکین</h5>
                                            <p className="mb-0 f-14">در صنعت چاپ و طراحی گرافیک، Lorem
                                                ipsum یک متن آزمایشی است که معمولاً برای نمایش فرم
                                                ظاهری سند استفاده می‌شود.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card rounded-4 shadow-none border mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start gap-3">
                                        <img
                                            src="assets/images/megaIcons/01.png"
                                            width="40"
                                            alt=""
                                        />
                                        <div className="mega-menu-content">
                                            <h5>هاب‌اسپات</h5>
                                            <p className="mb-0 f-14">در صنعت چاپ و طراحی گرافیک، Lorem
                                                ipsum یک متن آزمایشی است که معمولاً برای نمایش فرم
                                                ظاهری سند استفاده می‌شود.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card rounded-4 shadow-none border mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start gap-3">
                                        <img
                                            src="assets/images/megaIcons/11.png"
                                            width="40"
                                            alt=""
                                        />
                                        <div className="mega-menu-content">
                                            <h5>قالب‌ها</h5>
                                            <p className="mb-0 f-14">در صنعت چاپ و طراحی گرافیک، Lorem
                                                ipsum یک متن آزمایشی است که معمولاً برای نمایش فرم
                                                ظاهری سند استفاده می‌شود.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card rounded-4 shadow-none border mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start gap-3">
                                        <img
                                            src="assets/images/megaIcons/13.png"
                                            width="40"
                                            alt=""
                                        />
                                        <div className="mega-menu-content">
                                            <h5>کتاب‌های الکترونیکی</h5>
                                            <p className="mb-0 f-14">در صنعت چاپ و طراحی گرافیک، Lorem
                                                ipsum یک متن آزمایشی است که معمولاً برای نمایش فرم
                                                ظاهری سند استفاده می‌شود.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card rounded-4 shadow-none border mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start gap-3">
                                        <img
                                            src="assets/images/megaIcons/12.png"
                                            width="40"
                                            alt=""
                                        />
                                        <div className="mega-menu-content">
                                            <h5>فروش</h5>
                                            <p className="mb-0 f-14">در صنعت چاپ و طراحی گرافیک، Lorem
                                                ipsum یک متن آزمایشی است که معمولاً برای نمایش فرم
                                                ظاهری سند استفاده می‌شود.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card rounded-4 shadow-none border mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start gap-3">
                                        <img
                                            src="assets/images/megaIcons/08.png"
                                            width="40"
                                            alt=""
                                        />
                                        <div className="mega-menu-content">
                                            <h5>ابزارها</h5>
                                            <p className="mb-0 f-14">در صنعت چاپ و طراحی گرافیک، Lorem
                                                ipsum یک متن آزمایشی است که معمولاً برای نمایش فرم
                                                ظاهری سند استفاده می‌شود.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card rounded-4 shadow-none border mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start gap-3">
                                        <img
                                            src="assets/images/megaIcons/09.png"
                                            width="40"
                                            alt=""
                                        />
                                        <div className="mega-menu-content">
                                            <h5>آکادمی</h5>
                                            <p className="mb-0 f-14">در صنعت چاپ و طراحی گرافیک، Lorem
                                                ipsum یک متن آزمایشی است که معمولاً برای نمایش فرم
                                                ظاهری سند استفاده می‌شود.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                data-bs-auto-close="outside"
                data-bs-toggle="dropdown"
                href="#"
            >
                <i className="material-icons-outlined">apps</i>
            </a>
            <div
                className="dropdown-menu dropdown-menu-end dropdown-apps shadow-lg p-3"
            >
                <div className="border rounded-4 overflow-hidden">
                    <div className="row row-cols-3 g-0 border-bottom">
                        <div className="col border-end">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/01.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">جیمیل</p>
                                </div>
                            </div>
                        </div>
                        <div className="col border-end">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/02.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">اسکایپ</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/03.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">اسلک</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-3 g-0 border-bottom">
                        <div className="col border-end">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/04.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">یوتیوب</p>
                                </div>
                            </div>
                        </div>
                        <div className="col border-end">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/05.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">گوگل</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/06.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">اینستاگرام</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-3 g-0 border-bottom">
                        <div className="col border-end">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/07.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">اسپاتیفای</p>
                                </div>
                            </div>
                        </div>
                        <div className="col border-end">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/08.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">یاهو</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/09.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">فیسبوک</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-3 g-0">
                        <div className="col border-end">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/10.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">فیگما</p>
                                </div>
                            </div>
                        </div>
                        <div className="col border-end">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/11.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">پی‌پال</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="app-wrapper d-flex flex-column gap-2 text-center">
                                <div className="app-icon">
                                    <img src="assets/images/apps/12.png" width="36" alt=""/>
                                </div>
                                <div className="app-name">
                                    <p className="mb-0">عکس</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
               data-bs-auto-close="outside"
               data-bs-toggle="dropdown" href="#"><i
                className="material-icons-outlined">notifications</i>
                <span className="badge-notify">۵</span>
            </a>
            <div className="dropdown-menu dropdown-notify dropdown-menu-end shadow">
                <div
                    className="px-3 py-1 d-flex align-items-center justify-content-between border-bottom">
                    <h5 className="notiy-title mb-0">اطلاعیه‌ها</h5>
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle dropdown-toggle-nocaret option"
                            type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
<span className="material-icons-outlined">
more_vert
</span>
                        </button>
                        <div className="dropdown-menu dropdown-option dropdown-menu-end shadow">
                            <div><a className="dropdown-item d-flex align-items-center gap-2 py-2"
                                    href="#"><i
                                className="material-icons-outlined fs-6">inventory_2</i>بایگانی همه</a>
                            </div>
                            <div><a className="dropdown-item d-flex align-items-center gap-2 py-2"
                                    href="#"><i
                                className="material-icons-outlined fs-6">done_all</i>علامت‌گذاری همه به
                                عنوان خوانده‌شده</a></div>
                            <div><a className="dropdown-item d-flex align-items-center gap-2 py-2"
                                    href="#"><i
                                className="material-icons-outlined fs-6">mic_off</i>غیرفعال‌سازی
                                اطلاعیه‌ها</a></div>
                            <div><a className="dropdown-item d-flex align-items-center gap-2 py-2"
                                    href="#"><i
                                className="material-icons-outlined fs-6">grade</i>چه خبر است؟</a></div>
                            <div>
                                <hr className="dropdown-divider"/>
                            </div>
                            <div><a className="dropdown-item d-flex align-items-center gap-2 py-2"
                                    href="#"><i
                                className="material-icons-outlined fs-6">leaderboard</i>گزارش‌ها</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="notify-list">
                    <div>
                        <a className="dropdown-item border-bottom py-2" href="#">
                            <div className="d-flex align-items-center gap-3">
                                <div className="">
                                    <img src="assets/images/avatars/01.png" className="rounded-circle"
                                         width="45" height="45" alt=""/>
                                </div>
                                <div className="">
                                    <h5 className="notify-title">تبریک می‌گویم جان</h5>
                                    <p className="mb-0 notify-desc">تبریک‌های بسیار جان. شما جوایز را
                                        برنده شدید.</p>
                                    <p className="mb-0 notify-time">امروز</p>
                                </div>
                                <div className="notify-close position-absolute end-0 me-3">
                                    <i className="material-icons-outlined fs-6">close</i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a className="dropdown-item border-bottom py-2" href="#">
                            <div className="d-flex align-items-center gap-3">
                                <div className="user-wrapper bg-primary text-primary bg-opacity-10">
                                    <span>RS</span>
                                </div>
                                <div className="">
                                    <h5 className="notify-title">حساب جدید ایجاد شد</h5>
                                    <p className="mb-0 notify-desc">از ایالات متحده یک کاربر ثبت‌نام
                                        کرده است.</p>
                                    <p className="mb-0 notify-time">دیروز</p>
                                </div>
                                <div className="notify-close position-absolute end-0 me-3">
                                    <i className="material-icons-outlined fs-6">close</i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a className="dropdown-item border-bottom py-2" href="#">
                            <div className="d-flex align-items-center gap-3">
                                <div className="">
                                    <img src="assets/images/apps/13.png" className="rounded-circle"
                                         width="45" height="45" alt=""/>
                                </div>
                                <div className="">
                                    <h5 className="notify-title">پرداخت دریافت شد</h5>
                                    <p className="mb-0 notify-desc">پرداخت جدید به‌طور موفقیت‌آمیز
                                        دریافت شد</p>
                                    <p className="mb-0 notify-time">۱ روز پیش</p>
                                </div>
                                <div className="notify-close position-absolute end-0 me-3">
                                    <i className="material-icons-outlined fs-6">close</i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a className="dropdown-item border-bottom py-2" href="#">
                            <div className="d-flex align-items-center gap-3">
                                <div className="">
                                    <img src="assets/images/apps/14.png" className="rounded-circle"
                                         width="45" height="45" alt=""/>
                                </div>
                                <div className="">
                                    <h5 className="notify-title">سفارش جدید دریافت شد</h5>
                                    <p className="mb-0 notify-desc">سفارش جدید از میشل دریافت شد</p>
                                    <p className="mb-0 notify-time">۲:۱۵ ب.ظ</p>
                                </div>
                                <div className="notify-close position-absolute end-0 me-3">
                                    <i className="material-icons-outlined fs-6">close</i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a className="dropdown-item border-bottom py-2" href="#">
                            <div className="d-flex align-items-center gap-3">
                                <div className="">
                                    <img src="assets/images/avatars/06.png" className="rounded-circle"
                                         width="45" height="45" alt=""/>
                                </div>
                                <div className="">
                                    <h5 className="notify-title">تبریک می‌گویم جان</h5>
                                    <p className="mb-0 notify-desc">تبریک‌های بسیار جان. شما جوایز را
                                        برنده شدید.</p>
                                    <p className="mb-0 notify-time">امروز</p>
                                </div>
                                <div className="notify-close position-absolute end-0 me-3">
                                    <i className="material-icons-outlined fs-6">close</i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a className="dropdown-item py-2" href="#">
                            <div className="d-flex align-items-center gap-3">
                                <div className="user-wrapper bg-danger text-danger bg-opacity-10">
                                    <span>PK</span>
                                </div>
                                <div className="">
                                    <h5 className="notify-title">حساب جدید ایجاد شد</h5>
                                    <p className="mb-0 notify-desc">از ایالات متحده یک کاربر ثبت‌نام
                                        کرده است.</p>
                                    <p className="mb-0 notify-time">دیروز</p>
                                </div>
                                <div className="notify-close position-absolute end-0 me-3">
                                    <i className="material-icons-outlined fs-6">close</i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </li>


        <li className="nav-item d-md-flex d-none">
            <a
                className="nav-link position-relative"
                data-bs-toggle="offcanvas"
                href="#offcanvasCart"
            ><i className="material-icons-outlined">shopping_cart</i>
                <span className="badge-notify">۸</span>
            </a>
        </li>

        <li className="nav-item dropdown">
            <a
                href="javascrpt:;"
                className="dropdown-toggle dropdown-toggle-nocaret"
                data-bs-toggle="dropdown"
            >
                <img
                    src="assets/images/avatars/01.png"
                    className="rounded-circle p-1 border"
                    width="45"
                    height="45"
                    alt=""
                />
            </a>
            <div className="dropdown-menu dropdown-user dropdown-menu-end shadow">
                <a className="dropdown-item gap-2 py-2" href="#">
                    <div className="text-center">
                        <img
                            src="assets/images/avatars/01.png"
                            className="rounded-circle p-1 shadow mb-3"
                            width="90"
                            height="90"
                            alt=""
                        />
                        <h5 className="user-name mb-0 fw-bold">سلام، جان</h5>
                    </div>
                </a>
                <hr className="dropdown-divider"/>
                <a
                    className="dropdown-item d-flex align-items-center gap-2 py-2"
                    href="#"
                ><i className="material-icons-outlined">person_outline</i>پروفایل</a>
                <a
                    className="dropdown-item d-flex align-items-center gap-2 py-2"
                    href="#"
                ><i className="material-icons-outlined">local_bar</i>تنظیمات</a>
                <a
                    className="dropdown-item d-flex align-items-center gap-2 py-2"
                    href="#"
                ><i className="material-icons-outlined">dashboard</i>داشبورد</a>
                <a
                    className="dropdown-item d-flex align-items-center gap-2 py-2"
                    href="#"
                ><i className="material-icons-outlined">account_balance</i>درآمد</a>
                <a
                    className="dropdown-item d-flex align-items-center gap-2 py-2"
                    href="#"
                ><i className="material-icons-outlined">cloud_download</i>دانلودها</a>
                <hr className="dropdown-divider"/>
                <a
                    className="dropdown-item d-flex align-items-center gap-2 py-2"
                    href="#"
                ><i className="material-icons-outlined">power_settings_new</i>خروج</a>
            </div>
        </li>

    </ul>

</nav>
</header>
<aside className="sidebar-wrapper" data-simplebar="true">
            <div className="sidebar-header">
                <div className="logo-icon">
                    <img src="assets/images/logo-icon.png" className="logo-img" alt="Logo" />
                </div>
                <div className="logo-name flex-grow-1">
                    <h5 className="mb-0">Maxton</h5>
                </div>
                <div className="sidebar-close">
                    <span className="material-icons-outlined">close</span>
                </div>
            </div>
            <div className="sidebar-nav">
                <ul className="metismenu" id="sidenav">
                    {menu.map((item, index) => (
                        <li key={index}>
                            <a href="#" className="has-arrow">
                                <div className="parent-icon">
                                    <i className="material-icons-outlined">{item.icon || "menu"}</i>
                                </div>
                                <div className="menu-title">{item.title}</div>
                            </a>
                            {item.children && (
                                <ul>
                                    {item.children.map((child, childIndex) => (
                                        <li key={childIndex}>
                                            <a href={child.link}>
                                                <i className="material-icons-outlined">arrow_left</i>
                                                {child.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
        </>

    );
};

export default Header;
