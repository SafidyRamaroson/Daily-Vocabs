import { LayoutProps } from "@/types";

type Props ={
    definition: string
}

export function VocabularyDefinition({definition}: Props){
    return(
        <p className="text-base mb-2">{ definition }</p>
    )
}