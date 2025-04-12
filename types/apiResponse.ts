type Phonetic = {
    text?: string;
    audio?: string;
    sourceUrl?: string;
    license?: License;
}

type License = {
    name: string;
    url: string;
}

type Definition = {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
}

type Meaning = {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}

export type DictionaryApiResponse = {
    word: string;
    phonetic?: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    license?: License;
    sourceUrls: string[];
}