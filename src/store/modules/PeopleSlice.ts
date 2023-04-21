import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { doGet } from '../../services/api';
import SearchType from '../../types/SearchType';
import { RootState } from '..';

const adapter = createEntityAdapter<SearchType>({
  selectId: item => item.name
});

export const getPeople = createAsyncThunk('people/get', async (page: number) => {
  const response = await doGet('/people/?page=' + page);

  return response;
});


export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.people);

const peopleSlice = createSlice({
  name: 'people',
  initialState: adapter.getInitialState({ next: null, previous: null }),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne
  },
  extraReducers: builder => {
    builder.addCase(getPeople.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload.results);
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    });
    builder.addCase(getPeople.pending, state => {
      state.next = null;
      state.previous = null;
    });
  }
});

export const { addOne, addMany, updateOne } = peopleSlice.actions;
export default peopleSlice.reducer;
