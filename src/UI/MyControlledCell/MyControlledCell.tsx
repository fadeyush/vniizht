import React, { FC, useEffect, useRef, useState } from 'react';
import classes from './MyControlledCell.module.scss';
import { trainsCharacteristics } from '../../types/table';

interface MyControlledCellProps {
    value: number | string;
    type: string;
}

const MyControlledCell: FC<MyControlledCellProps> = ({value, type}) => {
    const [valid, setValid] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef!.current!.value = value.toString()
    }, [])
    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        getValid(inputRef.current!.value, type)
    }
    
    const getValid = (value: number | string , type: string) => {
        if(value.toString().includes(',')) {
            value = value.toString().replace(/,/, '.')
        }
        if(type === trainsCharacteristics.force) {
            if(value.toString().includes('.') && Number(value) > 0) {
                setValid(true);
            } else {
                setValid(false);
            }
        } else if(type === trainsCharacteristics.engineAmperage) {
            if(Number(value) > 0 && Number.isInteger(Number(value))) {
                setValid(true);
            } else {
                setValid(false); 
            }
        } else if(type === trainsCharacteristics.speed) {
            if(Number(value) >= 0 && Number.isInteger(Number(value))) {
                setValid(true);
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