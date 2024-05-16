import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrainItemProps, TrainsListProps } from "../../types/trainsList";

const initialState: TrainsListProps = {
    trainsList: [],
    isLoading: false,
    error: ''
}

export const trainsListSlice = createSlice({
    name: 'productItem',
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
        }
    },
});

export default trainsListSlice.reducer;