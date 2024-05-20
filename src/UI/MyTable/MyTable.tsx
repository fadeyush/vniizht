import React, { FC } from 'react';
import classes from './MyTable.module.scss';
import { MyTableControlledCellTbodyProps, MyTableProps, MyTableTbodyProps, tableValueEnum } from '../../types/table';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { currentTrainSlice } from '../../store/reducers/CurrentTrainSlice';
import MyControlledCell from '../MyControlledCell/MyControlledCell';

const MyTable: FC<MyTableProps> = ({title, id, theadArr, tbodyElem, tbodyArr, tableValue}) => {
    const dispatch = useAppDispatch();
    const tableBodyArr: MyTableTbodyProps[] = [];
    const tableBodyCharacteristicsArr: MyTableControlledCellTbodyProps[] = [];

    if(tableValue === tableValueEnum.train) {
        tbodyArr!.map(trainElem=>
            tableBodyArr.push({
                id: `${trainElem.name}-1`,
                value: [trainElem.name, trainElem.description]
            })
        )
    } else if(tableValue === tableValueEnum.characteristics) {
        tbodyElem!.characteristics.map(trainElemcharacteristic=>
            tableBodyCharacteristicsArr.push({
                id: `${tbodyElem!.name}-2`,
                value: [
                    { value: trainElemcharacteristic.engineAmperage, type: `engineAmperage`}, 
                    { value: trainElemcharacteristic.force, type: `force`}, 
                    { value: trainElemcharacteristic.speed, type: `speed`}
                ],
            })
        )
    }    
    
    return (
        <div className={classes.MyTable__wrapper}>
            <table id={`${id ? id : ''}`} className={classes.MyTable__active}>
            <caption className={classes.MyTable__title}>{title}
            <br></br>{tableValue === tableValueEnum.characteristics ? <span>{tbodyElem?.name} </span> : ''}
            </caption>
            <thead>
                <tr className={classes.MyTable__thead}>
                    {theadArr.map((theadElem, i)=>
                        <th key={`${theadElem.id}-${i}`}>{theadElem.title}</th>
                    )}
                </tr>
            </thead>
            <tbody> 
            {tableValue === tableValueEnum.train ?
                tableBodyArr.map((tbodyElem, i)=>
                <tr className={classes.MyTable__row} key={`${tbodyElem.id}-${i}`}>
                        {tbodyElem.value.map(value=>
                            <th onClick={()=>dispatch(currentTrainSlice.actions.setCurrentTrain(i+1))} key={`${tbodyElem.id}-${value}`}>{value}</th>
                        )}
                </tr>
                )
                :
                tableBodyCharacteristicsArr.map((tbodyElem, i)=>
                    <tr className={classes.MyTable__row} key={`${tbodyElem.id}-${i}`}>
                            {tbodyElem.value.map((value, index)=>
                                <MyControlledCell i={i} tbodyElemId={id!-1} idvalue={`${tbodyElem.id}-${value.value}`} value={value.value} type={value.type} key={`${tbodyElem.id}-${value.value}`}></MyControlledCell>
                            )}
                    </tr>
                    )
            }
            </tbody>
            </table>
        </div>
    );
};

export default MyTable;