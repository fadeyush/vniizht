import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
    validCell: boolean,
}

const initialState: initialStateProps = {
    validCell: true,
}

export const validCellSlice = createSlice({
    name: 'validCell',
    initialState,
    reducers: {
        setValidCell(state, action: PayloadAction<boolean>) {
            state.validCell = action.payload; 
        }
    },
});

export default validCellSlice.reducer;