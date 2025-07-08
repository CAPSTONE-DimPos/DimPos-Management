import { configureStore } from "@reduxjs/toolkit";
import userSlice from '@/redux/user/user-slice';
import modalSlice from './modal/modal-slice';


const store = configureStore( {
    reducer: {
        user: userSlice,
        modal: modalSlice,
    },
} );
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
