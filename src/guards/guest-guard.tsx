import type { RootState } from "@/redux/store";
import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type GuestGuardProps = {
    children: ReactNode;
};

export default function GuestGuard ( { children }: GuestGuardProps )
{
    const { isAuthenticated } = useSelector( ( state: RootState ) => state.user );

    if ( isAuthenticated )
    {
        return <Navigate to={ '/dashboard' } />;
    }

    return <>{ children }</>;
}