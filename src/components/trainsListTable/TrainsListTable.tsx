import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';

const TrainsListTable: FC = () => {
    const {trainsList, isLoading, error} = useAppSelector(state => state.trainsListReducer);
    return (
        <div>
             {isLoading ?  
                <h2>Загрузка...</h2> : 
            error ? 
                <h2>{error}</h2> 
            :
            <section>
               {trainsList.map(trainElem=>
                <div>{trainElem.name}</div>
               )}
            </section> 
            }
        </div>
    );
};

export default TrainsListTable;