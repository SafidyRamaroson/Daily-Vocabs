"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Flag from 'react-world-flags';

type Props = {
    states: State[],
    selectedOption?: string,
    onChange?: (value: string) => void
}

type State = {
    code: string;
    acronym: string
}

function SwitcherLanguage({ states, selectedOption,onChange }: Props) {
    return (
        <div>
            <Select
                onValueChange={onChange}
                defaultValue={selectedOption}
                value={selectedOption}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Langues" />
                </SelectTrigger>
                <SelectContent>
                    {
                        states.map((state) => (
                            <SelectItem value={state.acronym} key={state.code}>
                                <div className="flex flex-row gap-2 items-center">
                                    <Flag code={state.code} style={{ width: '20px', height: '20px' }} />
                                    <span>{state.acronym}</span>
                                </div>
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </div>
    )
}

export { SwitcherLanguage }