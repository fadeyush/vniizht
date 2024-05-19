import { combineReducers, configureStore } from "@reduxjs/toolkit";
import trainsListReducer from "./reducers/TrainsListSlice";
import currentTrainReducer from "./reducers/CurrentTrainSlice";
import validCellReducer from "./reducers/ValidCellSlice";

const rootReducer = combineReducers({
    trainsListReducer,
    currentTrainReducer,
    validCellReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];