import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PayloadActionEditSetValid, PayloadActionSetValid, ValidCellProps } from "../../types/validCell";

const initialState: ValidCellProps = {
    validCell: [],
}

export const validCellSlice = createSlice({
    name: 'validCell',
    initialState,
    reducers: {
        setValidCell(state, action: PayloadAction<PayloadActionSetValid>) {
            state.validCell.push({id:action.payload.id, validCellArr: []})
        },
        setValidValueCell(state, action: PayloadAction<PayloadActionSetValid>) {
            if(state.validCell[action.payload.id].id === action.payload.id) {
                state.validCell[action.payload.id].validCellArr.push({id: action!.payload!.idvalue!, validCell: action.payload.value})
            }
        },
        setFalseValidCell(state, action: PayloadAction<PayloadActionEditSetValid>) {
            state.validCell[action.payload.id].validCellArr.forEach(elem=>{
                if(elem.id === action.payload.idvalue) {
                    elem.validCell = false
                }
            })
        },
        removeFalseValidCell(state, action: PayloadAction<PayloadActionEditSetValid>) {
            state.validCell[action.payload.id].validCellArr.forEach(elem=>{
                if(elem.id === action.payload.idvalue) {
                    elem.validCell = true
                }
            })
        }
    },
});

export default validCellSlice.reducer;