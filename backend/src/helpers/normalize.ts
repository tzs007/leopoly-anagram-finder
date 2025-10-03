// sort letters of given word
// "tárol" => "á","l","o","r","t"
// "rotál" => "á","l","o","r","t"
export const normalize = (word: string): string => {
  return word.split("").sort().join("");
};
