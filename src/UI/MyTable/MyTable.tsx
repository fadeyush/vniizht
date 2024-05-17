import React, { FC, useEffect } from 'react';
import classes from './MyTable.module.scss';
import { MyTableProps, MyTableTbodyProps, tableValueEnum } from '../../types/table';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { currentTrainSlice } from '../../store/reducers/CurrentTrainSlice';

const MyTable: FC<MyTableProps> = ({title, id, theadArr, tbodyElem, tbodyArr, tableValue}) => {
    const dispatch = useAppDispatch();
    const { currentTrain } = useAppSelector(state => state.currentTrainReducer);
    const tableBodyArr: MyTableTbodyProps[] = [];

    if(tableValue === tableValueEnum.train) {
        tbodyArr!.map(trainElem=>
            tableBodyArr.push({
                id: `${trainElem.name}-1`,
                value: [trainElem.name, trainElem.description]
            })
        )
    } else if(tableValue === tableValueEnum.characteristics) {
        tbodyElem!.characteristics.map(trainElemcharacteristic=>
            tableBodyArr.push({
                id: `${tbodyElem!.name}-2`,
                value: [trainElemcharacteristic.engineAmperage, trainElemcharacteristic.force, trainElemcharacteristic.speed]
            })
        )
    }    
    
    return ( 
        <>
        {
            id !== currentTrain && tableValue === tableValueEnum.characteristics ?
            ''
            :
            <table id={`${id ? id : ''}`} className={classes.MyTable__active}>
            <caption className={classes.MyTable__title}>{title}</caption>
            <thead>
                <tr className={classes.MyTable__thead}>
                    {theadArr.map((theadElem, i)=>
                        <th key={`${theadElem.id}-${i}`}>{theadElem.title}</th>
                    )}
                </tr>
            </thead>
            <tbody> 
                {tableBodyArr.map((tbodyElem, i)=>
                    <tr key={`${tbodyElem.id}-${i}`}>
                        {tableValue === tableValueEnum.train ?
                            tbodyElem.value.map(value=>
                                <th onClick={()=>dispatch(currentTrainSlice.actions.setCurrentTrain(i+1))} key={`${tbodyElem.id}-${value}`}>{value}</th>
                            )
                        :
                            tbodyElem.value.map(value=>
                                <th key={`${tbodyElem.id}-${value}`}>{value}</th>
                            )
                        }
                    </tr>
                )}
            </tbody>
            </table>
        }
        </>
    );
};

export default MyTable;