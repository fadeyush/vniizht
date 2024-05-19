import React, { FC } from 'react';
import classes from './TrainsListTable.module.scss'
import { useAppSelector } from '../../hooks/redux';
import { MyTableTheadProps, tableValueEnum } from '../../types/table';
import MyTable from '../../UI/MyTable/MyTable';

const TrainsListTable: FC = () => {
    const {trainsList, isLoading, error} = useAppSelector(state => state.trainsListReducer);
    const { currentTrain } = useAppSelector(state => state.currentTrainReducer);
    const { validCell } = useAppSelector(state => state.validCellReducer);

    const tableTrainsHead: MyTableTheadProps[] = [
        {id: `TrainColumnName`, title: 'Название'},
        {id: `TrainColumnDescription`, title: 'Описание'},
    ]
    const tableCharacteristicsHead: MyTableTheadProps[] = [
        {id: `TrainColumnEngineAmperage`, title: 'Ток двигателя'},
        {id: `TrainColumnForce`, title: 'Сила тяги'},
        {id: `TrainColumnSpeed`, title: 'Скорость'},
    ]

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
                        <MyTable id={i + 1} key={trainElem.name} tbodyElem={trainElem} theadArr={tableCharacteristicsHead} title='Характеристики' tbodyArr={trainsList} tableValue= {tableValueEnum.characteristics}/>
                    )}
                    {currentTrain !== 0 ? <button onClick={getSpeedConsole}  disabled={!validCell} className={classes.trainsListTable__button}>Отправить данные</button> : ''}
               </div>
            </section> 
            }
        </div>
    );
};

export default TrainsListTable;