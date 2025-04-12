"use client";

type Props = {
    sentence: string;
    traductionsSentence?: string[];
}

function VocabularyUseExampleCard({
    sentence,
    traductionsSentence
}: Props) {
    return (
        <div className="border p-2 rounded-md bg-white shadow-sm">
            <p className="text-base">{sentence}</p>
            <div>
                {
                    traductionsSentence?.map((traduction) => (
                        <p>{traduction}</p>
                    ))
                }
            </div>
        </div >
    )
}

export { VocabularyUseExampleCard }