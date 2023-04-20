import { combineReducers } from '@reduxjs/toolkit';

import PeopleSlice from './PeopleSlice';

export default combineReducers({
  people: PeopleSlice
});
