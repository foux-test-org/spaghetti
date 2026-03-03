export interface SpaghettiType {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  dangerLevel: number;
  borderColor: string;
  structuralIntegrity: number;
  sauceAdhesion: number;
  spiritualResonance: number;
}

export const spaghettiTypes: SpaghettiType[] = [
  {
    id: 1,
    name: "Regular Spaghetti",
    scientificName: "Pasticus magnificus",
    description: "The noble default. Accept no substitutes. Regular spaghetti has been the backbone of civilization since before recorded history. Its perfectly cylindrical form represents the pinnacle of human achievement.",
    dangerLevel: 1,
    borderColor: "#f59e0b",
    structuralIntegrity: 85,
    sauceAdhesion: 72,
    spiritualResonance: 95,
  },
  {
    id: 2,
    name: "Spaghettini",
    scientificName: "Pasticus ambitionis",
    description: "Spaghetti's ambitious younger sibling. Thinner, faster, and arguably more elegant. Some say it tries too hard. We say it doesn't try hard enough.",
    dangerLevel: 2,
    borderColor: "#ef4444",
    structuralIntegrity: 62,
    sauceAdhesion: 68,
    spiritualResonance: 78,
  },
  {
    id: 3,
    name: "Spaghettoni",
    scientificName: "Pasticus maximus",
    description: "For those who demand more from life. Spaghettoni is regular spaghetti's older, wiser cousin who studied abroad and came back with opinions about olive oil.",
    dangerLevel: 3,
    borderColor: "#8b5cf6",
    structuralIntegrity: 94,
    sauceAdhesion: 88,
    spiritualResonance: 82,
  },
  {
    id: 4,
    name: "Angel Hair",
    scientificName: "Pasticus etherealis",
    description: "Technically a different species. Controversial. The pasta community remains deeply divided on whether angel hair deserves to be in the spaghetti family at all. Proceedings are ongoing.",
    dangerLevel: 4,
    borderColor: "#ec4899",
    structuralIntegrity: 23,
    sauceAdhesion: 45,
    spiritualResonance: 91,
  },
  {
    id: 5,
    name: "Bucatini",
    scientificName: "Pasticus hollowus",
    description: "Spaghetti with a soul (the hole). Bucatini challenges our understanding of what it means to be pasta. Is the hole part of the pasta, or is the pasta part of the hole?",
    dangerLevel: 5,
    borderColor: "#10b981",
    structuralIntegrity: 78,
    sauceAdhesion: 96,
    spiritualResonance: 99,
  },
  {
    id: 6,
    name: "Linguine",
    scientificName: "Pasticus planaris",
    description: "The flat earth theory of pasta. Linguine insists on being flat in a round pasta world. Rebellious? Perhaps. Delicious? Undeniably. Spaghetti? The jury is still out.",
    dangerLevel: 3,
    borderColor: "#0ea5e9",
    structuralIntegrity: 81,
    sauceAdhesion: 79,
    spiritualResonance: 67,
  },
];
