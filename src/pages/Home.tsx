import React, { useEffect } from 'react';

import Typography from '@mui/material/Typography/Typography';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPeople, selectAll } from '../store/modules/PeopleSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const peopleRedux = useAppSelector(selectAll);

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  return (
    <>
      {peopleRedux.map(item => {
        return (
          <React.Fragment key={item.name}>
            <Typography variant="h5">{item.name}</Typography>
            <br>
            </br>
            <Typography variant="h6">{item.birth_year}</Typography>
            <Typography variant="body1">{item.eye_color}</Typography>
            <Typography variant="body1">{item.gender}</Typography>
          </React.Fragment>
        );
      })}
      ;
    </>
  );
};

export default Home;
