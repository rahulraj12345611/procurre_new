
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/router";
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import CommonReducer from "@/api/actionreducer/reducer/Common.reducer";
import CustomerReducer from "@/api/actionreducer/reducer/Customer.reducer";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import Header from "@/components/shared/headers/HeaderDefault";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["divisonalChart"],
};

const rootReducer = combineReducers({
  CustomerReducer: CustomerReducer,
  CommonReducer: CommonReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <Provider store={store}>
      <Header  />
      {/* <NextThemesProvider> */}
        <Component {...pageProps} />
      {/* </NextThemesProvider> */}
      </Provider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
