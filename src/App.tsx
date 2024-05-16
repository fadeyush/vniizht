import React, { useEffect } from 'react';
import classes from './App.module.scss'
import { useAppDispatch } from './hooks/redux';
import { fetchTrainsList } from './store/action-creator/fetchTrainsList';
import TrainsListTable from './components/trainsListTable/TrainsListTable';

function App() {
  const dispatch = useAppDispatch();

  useEffect(()=> {
      dispatch(fetchTrainsList())
  }, [])

  return (
    <div className={classes.App}>
      <TrainsListTable/>
    </div>
  );
}

export default App;
