import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ModalState
{
    isOpen: boolean;
}

const initialState: ModalState = {
    isOpen: false,
};

const modalSlice = createSlice( {
    name: "modal",
    initialState,
    reducers: {
        handleChangeModalState ( state, action: PayloadAction<boolean> )
        {
            state.isOpen = action?.payload;
        }
    },
} );

export const { handleChangeModalState } = modalSlice.actions;

export default
    modalSlice.reducer;