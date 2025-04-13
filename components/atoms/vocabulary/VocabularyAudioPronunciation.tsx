import { AudioLines } from "lucide-react";

type Props = {
    audioUrl?: string;
}

export function VocabularyAudioPronuncitation({
    audioUrl
}: Props) {
    return (
        <audio autoPlay>
            <AudioLines className="cursor-pointer" />
            <source src={audioUrl} type="audio/mpeg" />
            Votre navigateur ne supporte pas la lecture audio.
        </audio>

    )
}