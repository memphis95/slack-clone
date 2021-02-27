import { configureStore } from '@reduxjs/toolkit';
import enterRoomReducer from '../features/appSlice';

export default configureStore({
  reducer: {
    app: enterRoomReducer,
  },
});
