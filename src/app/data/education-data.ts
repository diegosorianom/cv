export interface Education {
    id: number;
    center: string;
    start: number;
    finish?: number;
    title: string;
}

export const EducationData: Education[] = [
    {
        id: 1,
        center: 'IES Tiempos Modernos',
        start: 2021,
        finish: 2023,
        title: 'Técnico Superior en Sistemas de Telecomunicaciones e Informáticos'
    },
    {
        id: 2,
        center: 'Centro San Valero',
        start: 2023,
        finish: 2025,
        title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma'
    }
]