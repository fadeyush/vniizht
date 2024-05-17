import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
    currentTrain: number,
}

const initialState: initialStateProps = {
    currentTrain: 0,
}

export const currentTrainSlice = createSlice({
    name: 'currentTrain',
    initialState,
    reducers: {
        setCurrentTrain(state, action: PayloadAction<number>) {
            state.currentTrain = action.payload; 
        }
    },
});

export default currentTrainSlice.reducer;