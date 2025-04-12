"use client";

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { VocabularyCallToActionButtonGroup } from "@/components/molecules/VocabularyCallToActionButtonGroup";
import { DailyVocabularyList } from "@/components/organisms/DailyVocabularyList";
import { LayoutTemplate } from "@/components/templates";
import { Button } from "@/components/ui/button";
import { useGet } from "@/hooks/useGet";
import { Download, Filter } from "lucide-react";

export default function HomePage() {

    const { data: randomWords, isPending } = useGet({
        endpoint: "https://random-word-api.herokuapp.com/word?number=16",
        queryKey: "wordsOfDay"
    });

    const mockVocabularies = Array(16).fill({
        term: "term",
        definition: "definition",
        pronuncitation: "pronunciation"
    });
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