import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import classes from './MyControlledCell.module.scss';
import { trainsCharacteristics } from '../../types/table';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { trainsListSlice } from '../../store/reducers/TrainsListSlice';
import { validCellSlice } from '../../store/reducers/ValidCellSlice';
import { useDebouncedCallback } from 'use-debounce';
import { MyControlledCellProps, PayloadActionEditSetValid } from '../../types/validCell';

const MyControlledCell: FC<MyControlledCellProps> = ({value, type, i, tbodyElemId, idvalue}) => {
    const { currentTrain } = useAppSelector(state => state.currentTrainReducer);
    const { validCell } = useAppSelector(state => state.validCellReducer);
    const [valid, setValid] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const debounced = useDebouncedCallback(
        () => {
            if(Number(inputRef!.current!.value) || Number(inputRef!.current!.value) === 0) {
                dispatch(trainsListSlice.actions.trainsListEditPerem({id: currentTrain, value: Number(inputRef!.current!.value), i}))
            }
        },
        600
    );

    const debouncedValid = useDebouncedCallback(
        (value: PayloadActionEditSetValid) => {
            if(!valid) {
                dispatch(validCellSlice.actions.setFalseValidCell(value))
            } else if(valid) {
                dispatch(validCellSlice.actions.removeFalseValidCell(value))
            }
        },
        500
    );

    useEffect(()=>{
        inputRef!.current!.value = value.toString();
        dispatch(validCellSlice.actions.setValidValueCell({value: valid, id: tbodyElemId, idvalue}))
    }, [])
    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        getValid(inputRef.current!.value, type);
        debouncedValid({id: tbodyElemId, idvalue: idvalue})
    }
    
    const getValid = (value: number | string , type: string) => {
        if(value.toString().includes(',')) {
            value = value.toString().replace(/,/, '.')
        }
        if(type === trainsCharacteristics.force) {
            if(value.toString().includes('.') && Number(value) > 0) {
                if(!valid) {
                    setValid(true);
                }
            } else {
                setValid(false);
            }
        } else if(type === trainsCharacteristics.engineAmperage) {
            if(Number(value) > 0 && Number.isInteger(Number(value))) {
                if(!valid) {
                    setValid(true);
                }
            } else {
                setValid(false);
            }
        } else if(type === trainsCharacteristics.speed) {
            if(Number(value) >= 0 && Number.isInteger(Number(value)) ) {
                if(!valid) {
                    setValid(true);
                }
                debounced()
            } else {
                setValid(false);
            }
        }
    }

    return (
        <th><input className={valid === true ? classes.myControlledCell : classes.myControlledCell__error} ref={inputRef} onChange={changeHandler} type="text" /></th>
    );
};

export default MyControlledCell;