"use client";

import { VocabularyUseExampleCard, DailyVocabularyCard } from "@/components/molecules/cards";
import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { LayoutTemplate } from "@/components/templates";
import { useGet } from "@/hooks/useGet";
import { Vocabulary } from "@/types";
import { DictionaryApiResponse } from "@/types/apiResponse";
import { ArrowLeftCircle, AudioLines } from "lucide-react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";


export default function VocabularyAnalysis() {
    const { term } = useParams<{ term: string }>();
    const examples = Array(3).fill(0);
    const { data: randomWords, isPending } = useGet<DictionaryApiResponse[]>({
        endpoint: "https://api.dictionaryapi.dev/api/v2/entries/en/free",
        queryKey: "wordsOfDay"
    });

    const [mockVocabularies, setMockVocabularies] = useState<Vocabulary[]>([]);

    useEffect(() => {
        if (isPending) {
            console.log("Loading data...");
        } else {
            const mockVocabularies = Array(5).fill({
                term: randomWords?.[0]?.word,
                definition: randomWords?.[0]?.meanings[0]?.definitions[0]?.definition,
                pronunciation: randomWords?.[0]?.phonetics[0]?.text,
                audio: randomWords?.[0]?.phonetics[0]?.audio
            });
            console.log("mockVocabularies", mockVocabularies);
            setMockVocabularies(mockVocabularies);
        }
    }, [randomWords]);
    return (
        <LayoutTemplate >
            <div className="flex flex-row gap-3 mb-4 cursor-pointer text-gray-400">
                <ArrowLeftCircle />
                Retour vers les vocabulaires du jour
            </div>
            <LayoutSectionHeader
                title={`Explication du mot ${term}`}
            />
            <div className="mt-6">
                <div className="grid grid-cols-[2fr_1fr] gap-6">
                    <div>
                        <div className="bg-gray-50 border rounded-md p-3  transition-colors ease-linear duration-300">
                            <div className="flex flex-row justify-between items-center">
                                <div className="space-y-1">
                                    <p>{term} </p>
                                    <span className="text-gray-400">["pronunciation"]</span>
                                </div>
                                <AudioLines className="cursor-pointer" />
                            </div>
                            <h4
                                className="text-green-500 mt-4 mb-2"
                            >Exemples d'utilisation</h4>
                            <div className="flex flex-col gap-2">
                                {examples?.map((example, idx) => <VocabularyUseExampleCard
                                    sentence="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus veritatis facilis voluptatem maiores atque, ea ipsa quaerat error deserunt adipisci dignissimos quas repellat cum perspiciatis consectetur quo totam? Nobis"
                                />)}
                            </div>
                        </div>
                    </div>

                    <div className="-mt-10">
                        <h1 className="text-lg font-bold font-roboto mb-3">Autre vocabulaires du jour</h1>
                        <div className="grid grid-cols-1 gap-2 overflow-y-scroll">
                            {mockVocabularies?.map((vocabulary, idx) => (
                                <DailyVocabularyCard
                                    key={idx}
                                    term={vocabulary.term}
                                    definition={vocabulary.definition}
                                    pronunciation={vocabulary.pronunciation}
                                    audioUrl={vocabulary.audioUrl}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </LayoutTemplate>
    )
}
