"use client"
import { LayoutProps } from "@/types";
import * as React from "react";
import { AppHeader } from "@/components/organisms/shared/AppHeader";
import { statesData } from "@/data";

function LayoutTemplate({ children }: LayoutProps) {
    return (
        <main className="flex flex-col">
            <AppHeader
                states={statesData}
            />
            <div className="w-full min-h-[93.4%] px-4 pt-4">
                {children}
            </div>
        </main>
    )
}

export { LayoutTemplate }