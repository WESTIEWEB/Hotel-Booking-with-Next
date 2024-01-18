"use client"

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

type NextAuthProviderProps = PropsWithChildren<{
    children: React.ReactNode;
}>;
const NextAuthProvider = ({ children }: NextAuthProviderProps ) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default NextAuthProvider;