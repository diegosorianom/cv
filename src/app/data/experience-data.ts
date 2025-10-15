export interface WorkExperience {
    id: number;
    company: string;
    start: number;
    finish?: number;
    job: string;
    type: string;
}

export const WorkExperienceData: WorkExperience[] = [
    {
        id: 1,
        company: 'RTVE',
        start: 2023,
        finish: 2023,
        job: 'Técnico de Telecomunicaciones',
        type: 'FCT'
    },
    {
        id: 2,
        company: 'Inycom',
        start: 2025,
        finish: 2025,
        job: 'Front-end Developer',
        type: 'FCT'
    }
]