import { TrainItemProps } from "./trainsList";

export interface MyTableTheadProps {
    id: string;
    title: string;
}

export interface MyTableTbodyProps {
    id: string;
    value: string[] | number[];
}

export enum tableValueEnum {
    train = 'train',
    characteristics = 'characteristics'
}
export interface MyTableProps {
    title: string;
    theadArr: MyTableTheadProps[];
    tbodyArr?: TrainItemProps[];
    tbodyElem?: TrainItemProps;
    tableValue: string;
}