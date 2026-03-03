export interface SpaghettiFactData {
  id: number;
  fact: string;
  believability: number;
  bg_color: string;
  isReal: boolean;
}

export const facts: SpaghettiFactData[] = [
  {
    id: 1,
    fact: "The average person consumes approximately 23 pounds of pasta per year.",
    believability: 85,
    bg_color: "#fef3c7",
    isReal: true,
  },
  {
    id: 2,
    fact: "Spaghetti was originally invented as a building material for Roman aqueducts.",
    believability: 15,
    bg_color: "#fee2e2",
    isReal: false,
  },
  {
    id: 3,
    fact: "Italy produces about 3.3 million tons of pasta annually.",
    believability: 90,
    bg_color: "#d1fae5",
    isReal: true,
  },
  {
    id: 4,
    fact: "In 1957, the BBC ran a segment about Swiss spaghetti trees, and thousands of viewers believed it.",
    believability: 60,
    bg_color: "#e0e7ff",
    isReal: true,
  },
  {
    id: 5,
    fact: "NASA has confirmed that the surface of Venus is composed primarily of overcooked spaghetti.",
    believability: 8,
    bg_color: "#fce7f3",
    isReal: false,
  },
  {
    id: 6,
    fact: "The longest strand of spaghetti ever recorded was 3,776 meters.",
    believability: 45,
    bg_color: "#f3e8ff",
    isReal: false,
  },
  {
    id: 7,
    fact: "Dried pasta can last up to 2 years when stored properly.",
    believability: 88,
    bg_color: "#fef9c3",
    isReal: true,
  },
  {
    id: 8,
    fact: "Scientists have discovered that spaghetti always breaks into three or more pieces, never two. This was a real physics study.",
    believability: 55,
    bg_color: "#ccfbf1",
    isReal: true,
  },
  {
    id: 9,
    fact: "The International Spaghetti Council has 193 member nations, more than the United Nations.",
    believability: 12,
    bg_color: "#ffe4e6",
    isReal: false,
  },
  {
    id: 10,
    fact: "Thomas Jefferson is credited with bringing macaroni to America after visiting France.",
    believability: 75,
    bg_color: "#dbeafe",
    isReal: true,
  },
  {
    id: 11,
    fact: "A single strand of cooked spaghetti can generate enough static electricity to power a small LED for 0.003 seconds.",
    believability: 20,
    bg_color: "#fef3c7",
    isReal: false,
  },
  {
    id: 12,
    fact: "The word 'spaghetti' comes from the Italian word 'spago,' meaning 'thin string.'",
    believability: 92,
    bg_color: "#d1fae5",
    isReal: true,
  },
];

export interface QuizQuestion {
  statement: string;
  isReal: boolean;
}

export const quizQuestions: QuizQuestion[] = [
  {
    statement: "In 1957, the BBC broadcast a story about Swiss farmers harvesting spaghetti from trees.",
    isReal: true,
  },
  {
    statement: "The UN declared 2025 the International Year of Spaghetti.",
    isReal: false,
  },
  {
    statement: "MIT researchers proved that spaghetti cannot be broken in half — it always breaks into 3+ pieces.",
    isReal: true,
  },
  {
    statement: "Ancient Romans used long pasta noodles as shoelaces before discovering their culinary potential.",
    isReal: false,
  },
  {
    statement: "There is a museum in Pontedassio, Italy, dedicated entirely to the history of pasta.",
    isReal: true,
  },
];
