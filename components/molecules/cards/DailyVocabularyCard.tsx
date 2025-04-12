"use client";

import { VocabularyDefinition, VocabularyItem, VocabularyPronunciation, VocabularyAudioPronuncitation } from "@/components/atoms";
import { Vocabulary } from "@/types/vocabulary.type";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = Vocabulary;
function DailyVocabularyCard({
    term,
    definition,
    pronunciation,
}: Props) {
return (
        <div className="hover:bg-gray-50 border rounded-md p-3  transition-colors ease-linear duration-300">
            <div className="flex flex-row justify-between items-start">
                <div className="space-y-1">
                    <VocabularyItem term={term} />
                    <VocabularyPronunciation pronunciation={pronunciation} />
                </div>
                <VocabularyAudioPronuncitation />
            </div>
            <VocabularyDefinition definition="Lorem lorem lorem lorem lorem lorem lorem" />
            <Link
                href={`/analysis/${term}`}
                className="text-green-300 mt-4 flex flex-row items-center gap-4 group"
            ><span>
                    Voir des exemples
                </span>
                <ArrowRight className="group-hover:transition-transform group-hover:translate-x-2 group-hover:duration-50 group-hover:ease-in" />
            </Link>
        </div>
    )
}

export { DailyVocabularyCard }