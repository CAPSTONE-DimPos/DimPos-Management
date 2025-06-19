import type { RootState } from "@/redux/store";
import { logout } from "@/redux/user/user-slice";
import { PATH_AUTH } from "@/routes/path";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

const Logout = () =>
{
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector( ( state: RootState ) => state.user );
    useEffect( () =>
    {
        if ( isAuthenticated )
        {
            dispatch( logout() );
            window.location.href = PATH_AUTH.root;
        }
    }, [ dispatch ] )


    return null
}

export default Logout