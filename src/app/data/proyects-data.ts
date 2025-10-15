export interface Proyects {
    id: number;
    name: string;
    type: string;
    year: number;
    link: string;
}

export const ProyectsData: Proyects[] = [
    {
        id: 1,
        name: 'Formación Técnica Jazor',
        type: 'Sitio Web',
        year: 2024,
        link: 'https://tecnicajazor.com/'
    },
    {
        id: 2,
        name: 'Framing',
        type: 'Aplicación Android',
        year: 2025,
        link: 'https://github.com/SlavikBlxt4/framing/releases/tag/v.1.0.0'
    }
]