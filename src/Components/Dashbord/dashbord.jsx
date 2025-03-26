import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import Cookies from "js-cookie";

const Dashbord = () => {
  // -------------------------------
  // کارت‌های داشبورد (Cards Dashboard)
  // -------------------------------
  const chartRef = useRef(null);
  const [cardData, setCardData] = useState({
    salesTotal: 0,
    salesReturnTotal: 0,
    purchaseTotal: 0,
    purchaseReturnTotal: 0,
    deliveryOrderTotal: 0,
    goodsReceiveTotal: 0,
    transferOutTotal: 0,
    transferInTotal: 0,
  });

  useEffect(() => {
    const token = Cookies.get("accessToken");
    axios
      .get("http://localhost:5000/api/Dashboard/GetCardsDashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.code === 0) {
          setCardData(response.data.content.data.cardsDashboard);
        }
      })
      .catch((error) => console.error("Error fetching card dashboard data", error));
  }, []);

  useEffect(() => {
    if (chartRef?.current) {
      const labels = [
        "فروش کل",
        "مرجوعی فروش",
        "خرید کل",
        "مرجوعی خرید",
        "سفارش تحویل",
        "دریافت کالا",
        "انتقال خروج",
        "انتقال ورود",
      ];
      const dataValues = [
        cardData.salesTotal,
        cardData.salesReturnTotal,
        cardData.purchaseTotal,
        cardData.purchaseReturnTotal,
        cardData.deliveryOrderTotal,
        cardData.goodsReceiveTotal,
        cardData.transferOutTotal,
        cardData.transferInTotal,
      ];

      const chartInstance = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "مقادیر",
              data: dataValues,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: { scales: { y: { beginAtZero: true } }, plugins: { legend: { display: false } } },
      });

      return () => chartInstance.destroy();
    }
  }, [cardData]);

  // -------------------------------
  // داشبورد فروش (Sales Dashboard)
  // -------------------------------
  const groupChartRef = useRef(null);
  const categoryChartRef = useRef(null);
  const [salesDashboardData, setSalesDashboardData] = useState({
    salesOrderDashboard: [],
    salesByCustomerGroupDashboard: [],
    salesByCustomerCategoryDashboard: [],
  });

  useEffect(() => {
    const token = Cookies.get("accessToken");
    axios
      .get("http://localhost:5000/api/Dashboard/GetSalesDashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.code === 200) {
          setSalesDashboardData(response.data.content.data);
        }
      })
      .catch((error) => console.error("Error fetching sales dashboard data", error));
  }, []);

  useEffect(() => {
    let groupChartInstance, categoryChartInstance;

    // فروش بر اساس گروه مشتری (نوع Column → میله‌ای عمودی)
    if (groupChartRef.current && salesDashboardData.salesByCustomerGroupDashboard.length > 0) {
      const labels = salesDashboardData.salesByCustomerGroupDashboard.map(item => item.name);
      const dataValues = salesDashboardData.salesByCustomerGroupDashboard.map(item =>
        item.dataSource && item.dataSource.length ? item.dataSource.reduce((sum, curr) => sum + curr.y, 0) : 0
      );

      groupChartInstance = new Chart(groupChartRef.current, {
        type: "bar",
        data: { labels, datasets: [{ label: "فروش بر اساس گروه مشتری", data: dataValues, backgroundColor: "rgba(75, 192, 192, 0.2)", borderColor: "rgba(75, 192, 192, 1)", borderWidth: 1 }] },
        options: { scales: { y: { beginAtZero: true } }, plugins: { legend: { display: false } } },
      });
    }

    // فروش بر اساس دسته‌بندی مشتری (نوع Bar → میله‌ای افقی)
    if (categoryChartRef.current && salesDashboardData.salesByCustomerCategoryDashboard.length > 0) {
      const labels = salesDashboardData.salesByCustomerCategoryDashboard.map(item => item.name);
      const dataValues = salesDashboardData.salesByCustomerCategoryDashboard.map(item =>
        item.dataSource && item.dataSource.length ? item.dataSource.reduce((sum, curr) => sum + curr.y, 0) : 0
      );

      categoryChartInstance = new Chart(categoryChartRef.current, {
        type: "bar",
        data: { labels, datasets: [{ label: "فروش بر اساس دسته‌بندی مشتری", data: dataValues, backgroundColor: "rgba(153, 102, 255, 0.2)", borderColor: "rgba(153, 102, 255, 1)", borderWidth: 1 }] },
        options: { indexAxis: "y", scales: { x: { beginAtZero: true } }, plugins: { legend: { display: false } } },
      });
    }

    return () => {
      if (groupChartInstance) groupChartInstance.destroy();
      if (categoryChartInstance) categoryChartInstance.destroy();
    };
  }, [salesDashboardData]);

  // -------------------------------
  // داشبورد خرید (Purchase Dashboard)
  // -------------------------------
  const purchaseGroupChartRef = useRef(null);
  const purchaseCategoryChartRef = useRef(null);
  const [purchaseDashboardData, setPurchaseDashboardData] = useState({
    purchaseOrderDashboard: [],
    purchaseByVendorGroupDashboard: [],
    purchaseByVendorCategoryDashboard: [],
  });

  useEffect(() => {
    const token = Cookies.get("accessToken");
    axios
      .get("http://localhost:5000/api/Dashboard/GetPurchaseDashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.code === 200) {
          setPurchaseDashboardData(response.data.content.data);
        }
      })
      .catch((error) => console.error("Error fetching purchase dashboard data", error));
  }, []);

  useEffect(() => {
    let purchaseGroupChartInstance, purchaseCategoryChartInstance;

    // خرید بر اساس گروه فروشنده (نوع Bar → میله‌ای افقی)
    if (purchaseGroupChartRef.current && purchaseDashboardData.purchaseByVendorGroupDashboard.length > 0) {
      const labels = purchaseDashboardData.purchaseByVendorGroupDashboard.map(item => item.name);
      const dataValues = purchaseDashboardData.purchaseByVendorGroupDashboard.map(item =>
        item.dataSource && item.dataSource.length ? item.dataSource.reduce((sum, curr) => sum + curr.y, 0) : 0
      );

      purchaseGroupChartInstance = new Chart(purchaseGroupChartRef.current, {
        type: "bar",
        data: { labels, datasets: [{ label: "خرید بر اساس گروه فروشنده", data: dataValues, backgroundColor: "rgba(255, 159, 64, 0.2)", borderColor: "rgba(255, 159, 64, 1)", borderWidth: 1 }] },
        options: { indexAxis: "y", scales: { x: { beginAtZero: true } }, plugins: { legend: { display: false } } },
      });
    }

    // خرید بر اساس دسته‌بندی فروشنده (نوع Column → میله‌ای عمودی)
    if (purchaseCategoryChartRef.current && purchaseDashboardData.purchaseByVendorCategoryDashboard.length > 0) {
      const labels = purchaseDashboardData.purchaseByVendorCategoryDashboard.map(item => item.name);
      const dataValues = purchaseDashboardData.purchaseByVendorCategoryDashboard.map(item =>
        item.dataSource && item.dataSource.length ? item.dataSource.reduce((sum, curr) => sum + curr.y, 0) : 0
      );

      purchaseCategoryChartInstance = new Chart(purchaseCategoryChartRef.current, {
        type: "bar",
        data: { labels, datasets: [{ label: "خرید بر اساس دسته‌بندی فروشنده", data: dataValues, backgroundColor: "rgba(201, 203, 207, 0.2)", borderColor: "rgba(201, 203, 207, 1)", borderWidth: 1 }] },
        options: { scales: { y: { beginAtZero: true } }, plugins: { legend: { display: false } } },
      });
    }

    return () => {
      if (purchaseGroupChartInstance) purchaseGroupChartInstance.destroy();
      if (purchaseCategoryChartInstance) purchaseCategoryChartInstance.destroy();
    };
  }, [purchaseDashboardData]);

  // -------------------------------
  // داشبورد موجودی (Inventory Dashboard)
  // -------------------------------
  const inventoryChartRef = useRef(null);
  const [inventoryDashboardData, setInventoryDashboardData] = useState({
    inventoryTransactionDashboard: [],
    inventoryStockDashboard: [],
  });

  useEffect(() => {
    const token = Cookies.get("accessToken");
    axios
      .get("http://localhost:5000/api/Dashboard/GetInventoryDashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.code === 200) {
          setInventoryDashboardData(response.data.content.data);
        }
      })
      .catch((error) => console.error("Error fetching inventory dashboard data", error));
  }, []);

  useEffect(() => {
    let inventoryChartInstance;
    // رسم نمودار موجودی بر اساس stock (نوع Column → میله‌ای عمودی)
    if (inventoryChartRef.current && inventoryDashboardData.inventoryStockDashboard.length > 0) {
      const labels = inventoryDashboardData.inventoryStockDashboard.map(item => item.name);
      const dataValues = inventoryDashboardData.inventoryStockDashboard.map(item =>
        item.dataSource && item.dataSource.length ? item.dataSource.reduce((sum, curr) => sum + curr.y, 0) : 0
      );

      inventoryChartInstance = new Chart(inventoryChartRef.current, {
        type: "bar",
        data: { labels, datasets: [{ label: "موجودی بر اساس انبار", data: dataValues, backgroundColor: "rgba(255, 205, 86, 0.2)", borderColor: "rgba(255, 205, 86, 1)", borderWidth: 1 }] },
        options: { scales: { y: { beginAtZero: true } }, plugins: { legend: { display: false } } },
      });
    }

    return () => {
      if (inventoryChartInstance) inventoryChartInstance.destroy();
    };
  }, [inventoryDashboardData]);

  // -------------------------------
  // نمای رابط کاربری (UI)
  // -------------------------------
  return (
    <>
      <main className="main-wrapper">
        <div className="main-content">
          {/* Breadcrumb */}
          <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div className="breadcrumb-title pe-3">آنالیز</div>
            <div className="ps-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <a href="javascript:;"></a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    داشبورد
                  </li>
                </ol>
              </nav>
            </div>
            <div className="ms-auto">
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  تنظیمات
                </button>
                <button
                  type="button"
                  className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                >
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
            {/* Sales Cards Chart */}
            <div className="col-xxl-8 d-flex align-items-stretch">
              <div className="card w-100 overflow-hidden rounded-4">
                <div className="card-body position-relative p-4">
                  <div className="row">
                    <div className="col-12 col-sm-7">
                      <div className="d-flex align-items-center gap-3 mb-5">
                        <img
                          src="assets/images/avatars/01.png"
                          className="rounded-circle bg-grd-info p-1"
                          width="60"
                          height="60"
                          alt="user"
                        />
                        <div>
                          <p className="mb-0 fw-semibold">خوش آمدید</p>
                          <h4 className="fw-semibold mb-0 fs-4">جان اندرسون!</h4>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-5">
                        <div>
                          <h4 className="mb-1 fw-semibold d-flex align-content-center">
                            65,000 تومان
                            <i className="ti ti-arrow-up-right fs-5 lh-base text-success"></i>
                          </h4>
                          <p className="mb-3">فروش امروز</p>
                          <div className="progress mb-0" style={{ height: "5px" }}>
                            <div
                              className="progress-bar bg-grd-success"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="vr"></div>
                        <div>
                          <h4 className="mb-1 fw-semibold d-flex align-content-center">
                            ۷۸.۴%
                            <i className="ti ti-arrow-up-right fs-5 lh-base text-success"></i>
                          </h4>
                          <p className="mb-3">نرخ رشد</p>
                          <div className="progress mb-0" style={{ height: "5px" }}>
                            <div
                              className="progress-bar bg-grd-danger"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-5">
                      <div className="welcome-back-img pt-4">
                        <img
                          src="assets/images/gallery/welcome-back-3.png"
                          height="180"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Dashboard Chart */}
            <div className="col-xl-6 col-xxl-2 d-flex align-items-stretch">
              <div className="card w-100 rounded-4">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-1">
                    <h5 className="mb-0">داشبورد</h5>
                    <div className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle-nocaret options dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
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
                    <canvas ref={chartRef}></canvas>
                  </div>
                  <div className="text-center">
                    <p className="mb-0 font-12">نمایش مقادیر به زبان فارسی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Dashboard Charts */}
          <div className="row">
            <div className="col-xl-6 col-xxl-6 d-flex align-items-stretch">
              <div className="card w-100 rounded-4">
                <div className="card-body">
                  <h5 className="mb-3">فروش بر اساس گروه مشتری</h5>
                  <div className="chart-container2">
                    <canvas ref={groupChartRef}></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-6 d-flex align-items-stretch">
              <div className="card w-100 rounded-4">
                <div className="card-body">
                  <h5 className="mb-3">فروش بر اساس دسته‌بندی مشتری</h5>
                  <div className="chart-container2">
                    <canvas ref={categoryChartRef}></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Dashboard Charts */}
          <div className="row">
            <div className="col-xl-6 col-xxl-6 d-flex align-items-stretch">
              <div className="card w-100 rounded-4">
                <div className="card-body">
                  <h5 className="mb-3">خرید بر اساس گروه فروشنده</h5>
                  <div className="chart-container2">
                    <canvas ref={purchaseGroupChartRef}></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-6 d-flex align-items-stretch">
              <div className="card w-100 rounded-4">
                <div className="card-body">
                  <h5 className="mb-3">خرید بر اساس دسته‌بندی فروشنده</h5>
                  <div className="chart-container2">
                    <canvas ref={purchaseCategoryChartRef}></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Dashboard Charts */}
          <div className="row">
            <div className="col-xl-6 col-xxl-6 d-flex align-items-stretch">
              <div className="card w-100 rounded-4">
                <div className="card-body">
                  <h5 className="mb-3">موجودی بر اساس انبار</h5>
                  <div className="chart-container2">
                    <canvas ref={inventoryChartRef}></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
};

export default Dashbord;
