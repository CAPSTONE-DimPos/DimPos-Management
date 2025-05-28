import LoginPage from "@/pages/login";
import type { RootState } from "@/redux/store";
import { useState, type ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

type AuthGuardProps = {
    children: ReactNode;
};

export default function AuthGuard ( { children }: AuthGuardProps )
{
    const { isAuthenticated } = useSelector( ( state: RootState ) => state.user );

    const { pathname } = useLocation();

    const [ requestedLocation, setRequestedLocation ] = useState<string | null>( null );


    if ( !isAuthenticated )
    {
        if ( pathname !== requestedLocation )
        {
            setRequestedLocation( pathname );
        }
        if ( pathname === "/" )
        {
            return <Navigate to="/auth/login" />;
        }
        return <LoginPage />;
    }

    if ( requestedLocation && pathname !== requestedLocation )
    {
        setRequestedLocation( null );
        return <Navigate to={ requestedLocation } />;
    }

    return <>{ children }</>;
}