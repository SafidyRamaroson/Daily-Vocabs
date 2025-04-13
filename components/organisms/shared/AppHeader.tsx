"use client"

import { Brand, SwitcherLanguage } from "@/components/molecules";
import { State } from "@/types";
import { Sun, Moon } from "lucide-react";

type Props = {
    states: State[],
    selectedOption?: string,
    onChange?: (value: string) => void
}

function AppHeader({
    states,
    selectedOption,
    onChange
}: Props) {

    return (
        <div className="flex flex-row items-center justify-between py-4 px-2 gap-12 bg-gray-50">
            <Brand />
            <div className="flex flex-row items-center gap-4">
                <div className="flex flex-row gap-2">
                    <Sun className="text-gray-400 cursor-pointer" />
                    <Moon className="text-gray-400 cursor-pointer" />
                </div>
                <SwitcherLanguage states={states} selectedOption={selectedOption} onChange={onChange} />
            </div>
        </div>
    )
}

export { AppHeader }