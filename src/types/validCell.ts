interface ValidCellItemValueProps {
    id: string;
    validCell: boolean;
}
interface ValidCellItemProps {
    id: number;
    validCellArr: ValidCellItemValueProps[];
}

export interface ValidCellProps {
    validCell: ValidCellItemProps[];
}

export interface MyControlledCellProps {
    value: number | string;
    type: string;
    i: number;
    idvalue: string;
    tbodyElemId: number;
}

export enum SetValidActionTypes {
    setFalseValidCell = 'setFalseValidCell',
    removeFalseValidCell = 'removeFalseValidCell'
}

export interface PayloadActionSetValid {
    id: number;
    idvalue?: string;
    value: boolean;
}

export interface PayloadActionEditSetValid {
    id: number;
    idvalue: string;
}