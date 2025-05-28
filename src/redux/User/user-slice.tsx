import type { TAuthResponse } from "@/schema/auth.schema";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState
{
    user: TAuthResponse | null;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
};

const userSlice = createSlice( {
    name: "user",
    initialState,
    reducers: {
        setUser ( state, action: PayloadAction<TAuthResponse | null> )
        {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
            action.payload?.accessToken !== null && localStorage.setItem( "accessToken", action.payload?.accessToken! );
            action.payload?.refreshToken !== null && localStorage.setItem( "refreshToken", action.payload?.refreshToken! );
            localStorage.setItem( "user", JSON.stringify( action.payload ) );
        },
        loadUserFromStorage ( state )
        {
            const storedUser = localStorage.getItem( "user" );
            state.user = storedUser ? JSON.parse( storedUser ) : null;
            state.isAuthenticated = !!state.user;
        },
        logout ( state )
        {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem( "accessToken" );
            localStorage.removeItem( "refreshToken" );
            localStorage.removeItem( "user" );
        }
    },
} );

export const { setUser, loadUserFromStorage, logout } = userSlice.actions;

export default userSlice.reducer;
