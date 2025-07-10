import { Profession, Pathway } from '../types';

// Define known slugs
type ProfessionSlug = 'astronot' | 'game-developer' | 'dokter-hewan';

// Define the structure
const mockDatabase: {
    professions: Profession[];
    pathways: Record<ProfessionSlug, Pathway>;
} = {
    professions: [
        {
            id: 1,
            name: "Astronot",
            slug: "astronot",
            description: "Menjelajahi bintang, planet, dan galaksi.",
            image_url:
                "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "Game Developer",
            slug: "game-developer",
            description: "Menciptakan dunia dan petualangan seru.",
            image_url:
                "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: 3,
            name: "Dokter Hewan",
            slug: "dokter-hewan",
            description: "Merawat dan menyembuhkan sahabat hewan.",
            image_url:
                "https://images.unsplash.com/photo-1583337130417-2346a1be28a0?q=80&w=2070&auto=format&fit=crop",
        },
    ],
    pathways: {
        "astronot": {
            profession: {
                name: "Astronot",
                description: "Menjelajahi bintang, planet, dan galaksi di luar angkasa.",
            },
            steps: [
                {
                    education_level: "SD",
                    title: "Gabung Klub Sains",
                    description: "Pelajari dasar-dasar alam semesta dengan cara yang seru.",
                },
                {
                    education_level: "SMP",
                    title: "Fokus pada Fisika & Matematika",
                    description: "Dua mata pelajaran ini adalah kunci untuk memahami luar angkasa.",
                },
                {
                    education_level: "SMA",
                    title: "Pilih Jurusan IPA",
                    description: "Jurusan IPA akan membuka jalan ke fakultas teknik atau sains.",
                },
                {
                    education_level: "Universitas",
                    title: "Ambil Jurusan Teknik Penerbangan/Astronomi",
                    description: "ITB, UI, dan beberapa universitas lain memiliki jurusan yang relevan.",
                },
            ],
            skills: [
                {
                    id: 1,
                    name: "Problem Solving",
                    description: "Astronot harus bisa memecahkan masalah tak terduga di luar angkasa.",
                    icon_name: "🧩",
                },
                {
                    id: 2,
                    name: "Bahasa Inggris",
                    description: "Komunikasi dengan tim internasional sangat penting.",
                    icon_name: "🌍",
                },
                {
                    id: 3,
                    name: "Kerja Sama Tim",
                    description: "Misi luar angkasa adalah hasil kerja sama tim yang solid.",
                    icon_name: "🤝",
                },
            ],
            inspiration: {
                name: "Pratiwi Sudarmono",
                story:
                    "Meskipun misinya ditunda, beliau adalah astronot perempuan pertama Indonesia yang menunjukkan bahwa mimpi ini mungkin dicapai.",
                photo_url: "https://placehold.co/300x300/e2e8f0/334155?text=PS",
            },
        },
        "game-developer": {
            profession: {
                name: "Game Developer",
                description: "Menciptakan dunia dan petualangan seru melalui kode.",
            },
            steps: [
                {
                    education_level: "SD",
                    title: "Belajar Logika Sederhana",
                    description: "Mainkan game puzzle dan asah logika berpikirmu.",
                },
                {
                    education_level: "SMP",
                    title: "Coba Scratch atau Blockly",
                    description: "Mulai coding dengan platform visual yang menyenangkan dan mudah.",
                },
                {
                    education_level: "SMA",
                    title: "Pilih Jurusan IPA atau SMK RPL",
                    description: "Fokus pada matematika dan dasar-dasar rekayasa perangkat lunak.",
                },
                {
                    education_level: "Universitas",
                    title: "Ambil Jurusan Ilmu Komputer/Teknik Informatika",
                    description: "Perdalam pengetahuan tentang algoritma, struktur data, dan grafika komputer.",
                },
            ],
            skills: [
                {
                    id: 1,
                    name: "Problem Solving",
                    description: "...",
                    icon_name: "🧩",
                },
                {
                    id: 2,
                    name: "Bahasa Inggris",
                    description: "...",
                    icon_name: "🌍",
                },
                {
                    id: 3,
                    name: "Bahasa Indonesia",
                    description: "...",
                    icon_name: "🌍",
                },
            ],
            inspiration: {
                name: "Arief Widhiyasa",
                story:
                    "Co-founder Agate, salah satu studio game terbesar di Indonesia, membuktikan bahwa industri game lokal bisa mendunia.",
                photo_url: "https://placehold.co/300x300/e2e8f0/334155?text=AW",
            },
        },
        "dokter-hewan": {
            profession: {
                name: "Dokter Hewan",
                description: "Merawat dan menyembuhkan sahabat hewan.",
            },
            steps: [
                {
                    education_level: "SD",
                    title: "Suka dengan Binatang",
                    description: "Pelajari nama-nama hewan dan cara merawat mereka.",
                },
                {
                    education_level: "SMP",
                    title: "Gabung Klub Pecinta Satwa",
                    description: "Belajar merawat dan memahami perilaku hewan.",
                },
                {
                    education_level: "SMA",
                    title: "Pilih Jurusan IPA",
                    description: "Fokus pada Biologi dan Kimia untuk memahami tubuh hewan.",
                },
                {
                    education_level: "Universitas",
                    title: "Ambil Jurusan Kedokteran Hewan",
                    description: "Universitas seperti IPB dan UGM menawarkan jurusan ini.",
                },
            ],
            skills: [
                {
                    id: 1,
                    name: "Empati",
                    description: "Dokter hewan harus peka dan peduli terhadap hewan yang sakit.",
                    icon_name: "❤️",
                },
                {
                    id: 2,
                    name: "Analisis",
                    description: "Mendiagnosis penyakit dan memilih perawatan yang tepat.",
                    icon_name: "🔍",
                },
                {
                    id: 3,
                    name: "Komunikasi",
                    description: "Berinteraksi dengan pemilik hewan untuk memberikan edukasi.",
                    icon_name: "🗣️",
                },
            ],
            inspiration: {
                name: "Drh. Susana Widyaningsih",
                story: "Seorang dokter hewan yang mengabdi di pelosok Indonesia, menyelamatkan satwa liar.",
                photo_url: "https://placehold.co/300x300/e2e8f0/334155?text=SW",
            },
        },

    },
};

// --- Fix: cast the slug properly to known key
export const getPathwayBySlug = async (slug: string): Promise<Pathway | null> => {
    if (slug in mockDatabase.pathways) {
        return mockDatabase.pathways[slug as ProfessionSlug];
    }
    return null;
};

export const getProfessions = async (): Promise<Profession[]> => {
    return Promise.resolve(mockDatabase.professions);
};

export const getProfessionSlugs = async (): Promise<{ slug: string }[]> => {
    return Promise.resolve(mockDatabase.professions.map((p) => ({ slug: p.slug })));
};
