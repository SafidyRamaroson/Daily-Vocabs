"use client";

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { VocabularyCallToActionButtonGroup } from "@/components/molecules/VocabularyCallToActionButtonGroup";
import { DailyVocabularyList } from "@/components/organisms/DailyVocabularyList";
import { LayoutTemplate } from "@/components/templates";
import { Button } from "@/components/ui/button";
import { useGet } from "@/hooks/useGet";
import { Vocabulary } from "@/types";
import { DictionaryApiResponse } from "@/types/apiResponse";
import { useEffect, useState } from "react";

export default function HomePage() {

    const { data: randomWords, isPending } = useGet<DictionaryApiResponse[]>({
        endpoint: "https://api.dictionaryapi.dev/api/v2/entries/en/free",
        queryKey: "wordsOfDay"
    });

    const [mockVocabularies, setMockVocabularies] = useState<Vocabulary[]>([]);

    useEffect(() => {
        if (isPending) {
            console.log("Loading data...");
        } else {
            const mockVocabularies = Array(16).fill({
                term: randomWords?.[0]?.word,
                definition: randomWords?.[0]?.meanings[0]?.definitions[0]?.definition,
                pronunciation: randomWords?.[0]?.phonetics[0]?.text,
                audio: randomWords?.[0]?.phonetics[0]?.audio
            });
            console.log("mockVocabularies", mockVocabularies);
            setMockVocabularies(mockVocabularies);
        }
    }, [randomWords]);

    if(isPending){
        return (
            <LayoutTemplate>
                <div className="flex flex-col items-center justify-center h-screen">
                    <Button className="animate-pulse" label="Loading..."/>
                </div>
            </LayoutTemplate>
        )
    }

    return (
        <LayoutTemplate >
            <div className="flex flex-row items-center justify-between">
                <LayoutSectionHeader
                    title="Les vocabulaires du jour"
                    subtitle="Bienvenue chez Daily Vocabs , comme son l'indique vous aurez 16 nouveaux vocabulaires par jour"
                />
                <VocabularyCallToActionButtonGroup />
            </div>
            <DailyVocabularyList
                vocabularies={mockVocabularies}
            />
        </LayoutTemplate>
    )
}