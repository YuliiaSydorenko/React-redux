import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { counterSlice } from "./redux/counter/counterSlise";
import { feedbackSlice } from "./redux/feedback/feedbackSlice";

// 1️⃣ Создаём rootReducer с двумя slice
const rootReducer = combineSlices(counterSlice, feedbackSlice);


// 2️⃣ Определяем RootState на основе rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// 3️⃣ Функция создания хранилища
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  setupListeners(store.dispatch);
  return store;
};

// 4️⃣ Создаём store (основное хранилище)
export const store = makeStore();

// 5️⃣ Определяем типы для использования в Redux
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
