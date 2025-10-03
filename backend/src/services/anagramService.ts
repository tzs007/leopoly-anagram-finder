import words from "../data/words";
import { normalize } from "../helpers/normalize";

// compare words by sorting their letters to find anagrams
export const getAnagrams = (word: string): string[] | undefined => {
  if (!word || word.length !== 5) return;

  const sorted = normalize(word);
  return words.filter((w) => normalize(w) === sorted);
};
