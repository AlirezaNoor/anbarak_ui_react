// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // برای ذخیره‌سازی در localStorage
import menuReducer from './slices/menuSlice'; // وارد کردن menuSlice

// تنظیمات persist برای منو
const persistConfig = {
  key: 'root',
  storage, // ذخیره‌سازی در localStorage
};

const persistedReducer = persistReducer(persistConfig, menuReducer);

const store = configureStore({
  reducer: {
    menu: persistedReducer, // persisting منو
  },
});

const persistor = persistStore(store); // persistor برای ذخیره‌سازی

export { store, persistor }; // صادر کردن store و persistor
