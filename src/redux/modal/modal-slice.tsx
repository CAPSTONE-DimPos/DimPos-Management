import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ModalState
{
    isOpen: boolean;
    createdId?: string;
}

const initialState: ModalState = {
    isOpen: false,
    createdId: undefined,
};

const modalSlice = createSlice( {
    name: "modal",
    initialState,
    reducers: {
        handleChangeModalState ( state, action: PayloadAction<boolean> )
        {
            state.isOpen = action?.payload;
        },
        handleSetCreatedId ( state, action: PayloadAction<string | undefined> )
        {
            state.createdId = action?.payload;
        }
    },
} );

export const { handleChangeModalState, handleSetCreatedId } = modalSlice.actions;

export default
    modalSlice.reducer;