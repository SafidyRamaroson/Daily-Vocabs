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
import Flag from 'react-world-flags';

type Props = {
    states: State[]
}

type State = {
    code: string;
    acronym: string
}

function SwitcherLanguage({ states }: Props) {
    return (
        <div>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Langues"/>
                </SelectTrigger>
                <SelectContent defaultValue={states[0].code}>
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