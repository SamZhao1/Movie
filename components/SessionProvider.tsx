"use client"
import{SessionProvider} from 'next-auth/react';

type Provider = ({children}: {children: React.ReactNode;}) => JSX.Element

export const AuthProvider:Provider = ({children}) => {
    return <SessionProvider>{children}</SessionProvider>;
};