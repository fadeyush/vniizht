import React, { FC, useState } from 'react';

interface MyControlledCellProps {
    value: number | string;
}

const MyControlledCell: FC<MyControlledCellProps> = ({value}) => {
    const [state, setState] = useState<number | string>(value);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
    }
    return (
        <th><input value={state} onChange={changeHandler} type="text" /></th>
    );
};

export default MyControlledCell;