import React, { FC } from 'react';
import { MyTableProps, MyTableTbodyProps, tableValueEnum } from '../../types/table';

const MyTable: FC<MyTableProps> = ({title, theadArr, tbodyElem, tbodyArr, tableValue}) => {
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
        <table>
            <caption>{title}</caption>
            <thead>
                <tr>
                    {theadArr.map((theadElem, i)=>
                        <th key={`${theadElem.id}-${i}`}>{theadElem.title}</th>
                    )}
                </tr>
            </thead>
            <tbody> 
                {tableBodyArr.map((tbodyElem, i)=>
                    <tr key={`${tbodyElem.id}-${i}`}>
                        {tbodyElem.value.map(value=>
                            <th key={`${tbodyElem.id}-${value}`}>{value}</th>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default MyTable;