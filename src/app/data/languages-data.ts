export interface Languages {
    id: number;
    language: string;
    level: string;
    certification?: string;
}

export const LanguageData: Languages[] = [
    {
        id: 1,
        language: 'Inglés',
        level: 'B2',
    }
]