// Helper functions - yes, there's also a utils.ts file with similar stuff
// Nobody remembers why we have both

export function format_date(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

export function format_number(num: number): string {
  return num.toLocaleString();
}

export const SPAGHETTI_EMOJI = "\u{1F35D}";

export function get_difficulty_display(level: number): string {
  return SPAGHETTI_EMOJI.repeat(level);
}

export function capitalize_first(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
