"use client";

import { DailyVocabularyCard } from "@/components/molecules/cards";
import { Vocabulary } from "@/types";

type Props = {
    vocabularies: Vocabulary[];
}

function DailyVocabularyList({ vocabularies }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-sm mt-6 mb-4">
            {
                vocabularies.map((vocabulary, idx) => {
                    return (
                        <DailyVocabularyCard
                            term={`term ${idx}`}
                            definition={`definition ${idx}`}
                            pronunciation={`pronuncitaion ${idx}`}
                        />
                    )
                })
            }
        </div>
    )
}

export { DailyVocabularyList }