
type Props ={
    pronunciation: string
}

export function VocabularyPronunciation({
    pronunciation
}: Props){
    return(
        <h3 className="text-gray-400">[{pronunciation}]</h3>
    )
}