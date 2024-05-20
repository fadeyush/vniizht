import React, { FC, useEffect, useState } from 'react';
import classes from './CharacteristicsTable.module.scss'
import MyTable from '../../UI/MyTable/MyTable';
import { MyTableProps, tableValueEnum } from '../../types/table';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { validCellSlice } from '../../store/reducers/ValidCellSlice';

const CharacteristicsTable: FC<MyTableProps> = ({id, title, tbodyArr, theadArr, tbodyElem}) => {
    const { trainsList } = useAppSelector(state => state.trainsListReducer);
    const { currentTrain } = useAppSelector(state => state.currentTrainReducer);
    const { validCell } = useAppSelector(state => state.validCellReducer);
    const dispatch = useAppDispatch();
    const [buttonDisable, setButtonDisable] = useState<boolean>(false)

    function getSpeedConsole() {
        let speedArr: number[] = []
        trainsList[currentTrain-1].characteristics.map((characteristic) =>
            speedArr.push(characteristic.speed)
        )
        speedArr = speedArr.sort(function(a, b) {
            return a - b;
          })
        console.log(speedArr.toString())
    }

    useEffect(()=>{
        dispatch(validCellSlice.actions.setValidCell({value: true, id: id!}))
    }, [])

    useEffect(()=>{
        if(validCell[id!]) {
            let validArr: boolean[] = [];
            validCell[id!]!.validCellArr!.forEach(elem=>{
                if(elem.validCell === false) {
                    validArr.push(false)
                }
            })
            
            if(validArr.length) {
                setButtonDisable(true)
            } else {
                setButtonDisable(false)
            }
        } 
    }, [validCell])

    return ( 
        <>
        {
            id! + 1 !== currentTrain ?
            ''
            :
            <>
                <MyTable id={id! + 1 } title={title} tbodyElem={tbodyElem} theadArr={theadArr} tbodyArr={tbodyArr} tableValue={tableValueEnum.characteristics}/>
                <button onClick={getSpeedConsole} disabled={buttonDisable} className={classes.characteristicsTable__button}>Отправить данные</button>
            </>
        }
        </>
    );
};

export default CharacteristicsTable;