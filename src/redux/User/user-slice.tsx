import { apiRequest } from "@/lib/http";
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
            if ( action.payload?.accessToken !== null && action.payload?.accessToken !== undefined )
            {
                localStorage.setItem( "accessToken", action.payload?.accessToken! );
                localStorage.setItem( "refreshToken", action.payload?.refreshToken! );
                apiRequest.catalog.defaults.headers.common.Authorization = `Bearer ${ action.payload?.accessToken }`;
                apiRequest.identity.defaults.headers.common.Authorization = `Bearer ${ action.payload?.accessToken }`;
                apiRequest.menu.defaults.headers.common.Authorization = `Bearer ${ action.payload?.accessToken }`;
            }
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
            apiRequest.catalog.defaults.headers.common.Authorization = null;
            apiRequest.identity.defaults.headers.common.Authorization = null;
            apiRequest.menu.defaults.headers.common.Authorization = null;
            localStorage.removeItem( "user" );
        }
    },
} );

export const { setUser, loadUserFromStorage, logout } = userSlice.actions;

export default userSlice.reducer;
