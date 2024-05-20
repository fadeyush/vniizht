import React, { FC } from 'react';
import classes from './TrainsListTable.module.scss'
import { useAppSelector } from '../../hooks/redux';
import { MyTableTheadProps, tableValueEnum } from '../../types/table';
import MyTable from '../../UI/MyTable/MyTable';
import CharacteristicsTable from '../CharacteristicsTable/CharacteristicsTable';

const TrainsListTable: FC = () => {
    const {trainsList, isLoading, error} = useAppSelector(state => state.trainsListReducer);

    const tableTrainsHead: MyTableTheadProps[] = [
        {id: `TrainColumnName`, title: 'Название'},
        {id: `TrainColumnDescription`, title: 'Описание'},
    ]
    const tableCharacteristicsHead: MyTableTheadProps[] = [
        {id: `TrainColumnEngineAmperage`, title: 'Ток двигателя'},
        {id: `TrainColumnForce`, title: 'Сила тяги'},
        {id: `TrainColumnSpeed`, title: 'Скорость'},
    ]
    
    return (
        <div>
             {isLoading ?  
                <h2>Загрузка...</h2> : 
            error ? 
                <h2>{error}</h2> 
            :
            <section className={classes.trainsListTable}>
               <MyTable theadArr={tableTrainsHead} title='Поезда' tbodyArr={trainsList} tableValue={tableValueEnum.train}/>
               <div className={classes.trainsListTable__wrapper}>
                    {trainsList.map((trainElem, i)=>
                        <CharacteristicsTable title='Характеристики' key={trainElem.name} id={i} theadArr={tableCharacteristicsHead} tbodyArr={trainsList} tbodyElem={trainElem} tableValue={tableValueEnum.characteristics}/>
                    )}
               </div>
            </section> 
            }
        </div>
    );
};

export default TrainsListTable;