// import { loadUserFromStorage } from '@/redux/user/user-slice';
import { loadUserFromStorage } from '@/redux/user/user-slice';
import { useEffect, type ReactNode } from 'react';
import { useDispatch } from 'react-redux';


type Props = {
    children: ReactNode,
}

const AuthProvider = ( { children }: Props ) =>
{
    const dispatch = useDispatch();
    useEffect( () =>
    {
        dispatch( loadUserFromStorage() );
    }, [] );
    return children;
}

export default AuthProvider