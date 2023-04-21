import { Card, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { doGet } from '../services/api';

const alignCenter = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const Search: React.FC = () => {
  
  // const searchRedux = useAppSelector(selectAll);
  const [peopleSearched, setPeopleSearched] = useState<any[]>([]);

  const [namePerson, setNamePerson] = useState<string>('');

  const SearchPerson = async () => {
    const response = await doGet('/people/?search=' + namePerson);
    setPeopleSearched(response.results);
  };

  useEffect(() => {
    SearchPerson();
  }, [namePerson]);

  return (
    <>
      <Grid container sx={{ ...alignCenter, marginTop: '2rem' }}>
        <Grid item xs={12}>
          <Typography sx={{ padding: '10px' }} variant="h5">
            Digite o nome do seu personagem
          </Typography>
          <TextField
            onChange={e => setNamePerson(e.target.value)}
            fullWidth
            placeholder="Ex: Luke Skywalker"
          ></TextField>
        </Grid>
        {peopleSearched.map(item => {
          return (
            <Card elevation={2} key={item.name}>
              <Typography variant="h5">{item.name}</Typography>
              <br></br>
              <Typography variant="h6">{item.birth_year}</Typography>
              <Typography variant="body1">{item.eye_color}</Typography>
              <Typography variant="body1">{item.gender}</Typography>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};
//   const clear = () => {
//     setSearch({
//       type: 'Entrada',
//       value: 0,
//       id: 0
//     });

//     setTimeout(() => {
//       setAlertButton(false);
//     }, 3000);
//   };
//   const onSave = (e: FormEvent) => {
//     e.preventDefault();

//     dispatch(saveSearch({ id: Date.now(), value: Number(search.value), type: search.type }));
//     setAlertButton(true);
//     clear();
//   };

//   const handleTransactions = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearch(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
//   };

//   const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearch({ ...search, type: e.target.value as 'Saida' | 'Entrada' });
//   };

//   return (
//     <>
//       <Grid container sx={{ ...alignCenter, marginTop: '2rem' }}>
//         <Paper
//           sx={{
//             minWidth: '300px',
//             padding: '1rem'
//           }}
//         >
//           <Box>
//             <Typography variant="h4" align="center">
//               Procure seu personagem preferido
//             </Typography>
//           </Box>
//           <Box
//             component="form"
//             sx={{
//               marginTop: 2,

//               display: 'flex',
//               flexDirection: 'column',
//               gap: 2
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField
//               id="outlined-age-input"
//               label="Valor"
//               name="value"
//               type="number"
//               value={search.value}
//               onChange={handleTransactions}
//             />

//             <RadioGroup
//               name="radio-buttons-group"
//               sx={{ display: 'inline' }}
//               onChange={handleSelect}
//               // value={profile.gender || "female"}
//             >
//               <FormControlLabel value="Entrada" control={<Radio />} label="Entrada" />
//               <FormControlLabel value="Saida" control={<Radio />} label="Saida" />
//             </RadioGroup>

//             <Button
//               type="button"
//               variant="contained"
//               disabled={!search.type || !search.value}
//               onClick={onSave}
//             >
//               Cadastrar
//             </Button>
//           </Box>
//         </Paper>
//         {alertButton ? (
//           <Alert severity="success" sx={{ marginTop: '20px' }}>
//             Transação cadastrada com sucesso!
//           </Alert>
//         ) : (
//           <></>
//         )}
//       </Grid>
//     </>
//   );
// };

export default Search;
