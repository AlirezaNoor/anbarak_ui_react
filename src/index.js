// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // برای اتصال Redux
import { PersistGate } from 'redux-persist/integration/react'; // برای استفاده از persistor
import './index.css';
import { store, persistor } from './store/store'; // وارد کردن store و persistor
import AppRouter from './AppRouter';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);