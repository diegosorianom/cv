export interface Skill {
    id: number,
    name: string;
    category: 'backend' | 'frontend' | 'database' | 'tools' | 'design'
}

export const SkillData: Skill[] = [
    { id: 1, name: "Java", category: "backend"},
    { id: 2, name: "JavaScript", category: "frontend"},
    { id: 3, name: "TypeScript", category: "frontend"},
    { id: 4, name: "HTML5", category: "frontend"},
    { id: 5, name: "CSS3", category: "frontend"},
    { id: 6, name: "Angular", category: "frontend"},
    { id: 7, name: "React", category: "frontend"},
    { id: 8, name: "React Native", category: "frontend"},
    { id: 9, name: "Node.js", category: "backend"},
    { id: 10, name: "TailwindCSS", category: "frontend"},
    { id: 11, name: "Wireframing", category: "design"},
    { id: 12, name: "Figma", category: "design"},
    { id: 13, name: "MySQL", category: "database"},
    { id: 14, name: "APIRest", category: "backend"},
    { id: 15, name: "PostgreSQL", category: "database"},
    { id: 16, name: "AWS", category: "tools"},
    { id: 17, name: "Git", category: "tools" }
]