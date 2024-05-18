import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrainItemProps, TrainsListProps } from "../../types/trainsList";

const initialState: TrainsListProps = {
    trainsList: [],
    isLoading: false,
    error: ''
}

interface PayloadActionAdd {
    id: number;
    value: number;
    i: number;
}

export const trainsListSlice = createSlice({
    name: 'trainsList',
    initialState,
    reducers: {
        trainsListFetching(state) {
            state.isLoading = true; 
        },
        trainsListFetchingSuccess(state, action: PayloadAction<TrainItemProps[]>) {
            state.isLoading = false; 
            state.trainsList = action.payload;
            state.error = '';
        },
        trainsListFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false; 
            state.error = action.payload;
        },
        trainsListEditPerem(state, action: PayloadAction<PayloadActionAdd>) {
            state.trainsList[action.payload.id - 1].characteristics[action.payload.i].speed = action.payload.value
        }
    },
});

export default trainsListSlice.reducer;