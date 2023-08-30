"use client"

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface Props {
    children: ReactNode;
}

export const Providers = ({ children }: Props) => {
    return (
        <ThemeProvider enableSystem={false}>{children}</ThemeProvider>
    );
};