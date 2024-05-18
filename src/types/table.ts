import { TrainItemProps } from "./trainsList";

export interface MyTableTheadProps {
    id: string;
    title: string;
}

interface MyTableControlledCellProps {
    value: string | number;
    type: string;
}

export interface MyTableTbodyProps {
    id: string;
    value: string[] | number[];
}

export interface MyTableControlledCellTbodyProps {
    id: string;
    value: MyTableControlledCellProps[];
}

export enum tableValueEnum {
    train = 'train',
    characteristics = 'characteristics'
}

export enum trainsCharacteristics {
    speed = `speed`,
    force = `force`,
    engineAmperage = `engineAmperage`
}


export interface MyTableProps {
    title: string;
    theadArr: MyTableTheadProps[];
    tbodyArr?: TrainItemProps[];
    tbodyElem?: TrainItemProps;
    tableValue: string;
    id?: number;
}