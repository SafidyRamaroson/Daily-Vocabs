

type Props = {
    term: string
}

export function VocabularyItem({ term }:Props){
    return(
        <h1 className="text-base mb-1 font-bold">
            { term }
        </h1>
    )
}