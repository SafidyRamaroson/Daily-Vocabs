"use client";

import { VocabularyUseExampleCard, DailyVocabularyCard } from "@/components/molecules/cards";
import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { LayoutTemplate } from "@/components/templates";
import { ArrowLeftCircle, AudioLines } from "lucide-react";
import { useParams } from "next/navigation";


export default function VocabularyAnalysis() {
    const { term } = useParams<{ term: string }>();
    const examples = Array(3).fill(0)
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
                <div className="grid grid-cols-2 gap-6">
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

                    <div>
                        <h1 className="text-lg font-bold font-roboto mb-3">Autre vocabulaires du jour</h1>
                        <div className="grid grid-cols-2 gap-2 h-4/5 overflow-y-scroll">
                            <DailyVocabularyCard
                                term="term 0"
                                definition="definition"
                                pronunciation="pronunciation du mot term 0"
                                key={0}
                            />
                            <DailyVocabularyCard
                                term="term 0"
                                definition="definition"
                                pronunciation="pronunciation du mot term 0"
                                key={1}
                            />
                            <DailyVocabularyCard
                                term="term 0"
                                definition="definition"
                                pronunciation="pronunciation du mot term 0"
                                key={2}
                            />
                            <DailyVocabularyCard
                                term="term 0"
                                definition="definition"
                                pronunciation="pronunciation du mot term 0"
                                key={3}
                            />
                            <DailyVocabularyCard
                                term="term 0"
                                definition="definition"
                                pronunciation="pronunciation du mot term 0"
                                key={4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutTemplate>
    )
}
