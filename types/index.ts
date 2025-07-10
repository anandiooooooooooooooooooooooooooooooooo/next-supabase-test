export interface Profession {
    id: number | string;
    name: string;
    slug: string;
    description: string;
    image_url: string;
}

export interface Step {
    education_level: "SD" | "SMP" | "SMA" | "Universitas";
    title: string;
    description: string;
}

export interface Skill {
    id: number | string;
    name: string;
    description: string;
    icon_name: string;
}

export interface Inspiration {
    name: string;
    story: string;
    photo_url: string;
}

export interface Pathway {
    profession: Pick<Profession, "name" | "description">;
    steps: Step[];
    skills: Skill[];
    inspiration?: Inspiration;
}