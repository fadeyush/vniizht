import axios from "axios";
import { AppDispatch } from "../store";
import { trainsListSlice } from "../reducers/TrainsListSlice";
import { TrainItemProps } from "../../types/trainsList";

export const fetchTrainsList = () => {
    return async(dispatch: AppDispatch) => {
        try {
            dispatch(trainsListSlice.actions.trainsListFetching());
            const response = await axios.get<TrainItemProps[]>(`https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1dbfce008fa12c6d4838/mock.json`);
            dispatch(trainsListSlice.actions.trainsListFetchingSuccess(response.data));
        } catch (e) {
            console.log(e)
            
            dispatch(trainsListSlice.actions.trainsListFetchingError('Произошла ошибка при загрузке поездов!'))
        }
    }
}