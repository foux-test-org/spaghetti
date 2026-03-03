// Utility functions for the Spaghetti website
// Some of these overlap with helpers/formatters.ts and nobody knows which to use

export function formatDate(date: Date): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function is defined but never called anywhere
export function calculateSpaghettiDensity(weight: number, volume: number): number {
  const SPAGHETTI_CONSTANT = 3.14159;
  return (weight / volume) * SPAGHETTI_CONSTANT;
}

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};
