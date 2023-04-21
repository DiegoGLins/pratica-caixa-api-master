import React, { useEffect, useState } from 'react';

import Typography from '@mui/material/Typography/Typography';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPeople, selectAll } from '../store/modules/PeopleSlice';
import { Button } from '@mui/material';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const peopleRedux = useAppSelector(selectAll);
  const {next,previous} = useAppSelector(state => state.people);

  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    dispatch(getPeople(count));
  }, [count]);

  return (
    <>
      <Button disabled={next === null}  sx={{ margin: '10px' }} onClick={() => setCount(count + 1)} variant="contained">
        Aumentar
      </Button>
      <Button disabled={previous === null} onClick={() => setCount(count - 1)} variant="contained">
        Diminuir
      </Button>
      {peopleRedux.map(item => {
        return (
          <React.Fragment key={item.name}>
            <Typography variant="h5">{item.name}</Typography>
            <br></br>
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
