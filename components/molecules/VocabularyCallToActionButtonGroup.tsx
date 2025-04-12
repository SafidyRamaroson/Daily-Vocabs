"use client";

import { Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";


export function VocabularyCallToActionButtonGroup() {
    return (
        <div className="flex flex-row gap-3 items-center">
            <Button
                label="Download"
                icon={<Download />}
                iconPosition="left"
            />
            <Button
                label="Filter by"
                icon={<Filter />}
                iconPosition="left"
            />
        </div>
    )
}