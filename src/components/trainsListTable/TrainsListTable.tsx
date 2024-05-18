import React, { FC } from 'react';
import classes from './TrainsListTable.module.scss'
import { useAppSelector } from '../../hooks/redux';
import { MyTableTheadProps, tableValueEnum } from '../../types/table';
import MyTable from '../../UI/MyTable/MyTable';

const TrainsListTable: FC = () => {
    const {trainsList, isLoading, error} = useAppSelector(state => state.trainsListReducer);

    const tableTrainsHead: MyTableTheadProps[] = [
        {id: `TrainColumnName`, title: 'Название'},
        {id: `TrainColumnDescription`, title: 'Описание'},
    ]
    const tableCharacteristicsHead: MyTableTheadProps[] = [
        {id: `TrainColumnEngineAmperage`, title: 'Тип двигателя'},
        {id: `TrainColumnForce`, title: 'Сила тяги'},
        {id: `TrainColumnSpeed`, title: 'Скорость'},
    ]

    console.log(trainsList)
    return (
        <div>
             {isLoading ?  
                <h2>Загрузка...</h2> : 
            error ? 
                <h2>{error}</h2> 
            :
            <section className={classes.trainsListTable}>
               <MyTable theadArr={tableTrainsHead} title='Поезда' tbodyArr={trainsList} tableValue={tableValueEnum.train}/>
                {trainsList.map((trainElem, i)=>
                    <MyTable id={i + 1} key={trainElem.name} tbodyElem={trainElem} theadArr={tableCharacteristicsHead} title='Характеристики' tbodyArr={trainsList} tableValue={tableValueEnum.characteristics}/>
                )}
            </section> 
            }
        </div>
    );
};

export default TrainsListTable;