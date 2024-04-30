import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactReducer from './reducers/contact-reducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
