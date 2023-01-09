const isLetter = (str: string): boolean => {
  const alphabetRegex = /^[a-zA-Z]$/;
  return alphabetRegex.test(str);
};

const isNumber = (str: string): boolean => {
  const numberRegex = /^\d+$/;
  return numberRegex.test(str);
};

const isSymbol = (str: string): boolean => {
  const symbolRegex = /[^a-zA-Z0-9\s]/;
  return symbolRegex.test(str);
};

const isSpace = (str: string): boolean => {
  const spaceRegex = /\s/;
  return spaceRegex.test(str);
};

// const isWord = (str: string): boolean => {
//   const wordRegex = /\b\w+\b/g;
//   return wordRegex.test(str);
// };

const wordCount = (str: string): number => {
  const words = str.split(/\W+/); // split the string by any non-word characters
  const wordCount = words.length;
  return wordCount;
};

export interface AnalysisInterface {
  letters: number;
  numbers: number;
  words: number;
  symbols: number;
  spaces: number;
  totalCharacters: number;
}

export const stringAnalysis = (str: string): AnalysisInterface => {
  let letters = 0;
  let numbers = 0;
  let words = 0;
  let symbols = 0;
  let spaces = 0;

  for (const char of str) {
    const charStr: string = char.toString();
    if (isLetter(charStr)) {
      letters++;
    }
    if (isNumber(charStr)) {
      numbers++;
    }
    if (isSymbol(charStr)) {
      symbols++;
    }
    if (isSpace(charStr)) {
      spaces++;
    }
  }

  words = wordCount(str);

  return {
    letters,
    numbers,
    words,
    symbols,
    spaces,
    totalCharacters: letters + numbers + symbols + spaces,
  };
};
