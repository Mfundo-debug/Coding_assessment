function sayNumber(num: number): string {
  const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const suffixes = ["", "Thousand", "Million", "Billion", "Trillion"];

  if (num === 0) {
    return "Zero.";
  }

  const chunks = [];

  while (num > 0) {
    chunks.push(num % 1000);
    num = Math.floor(num / 1000);
  }

  const wordsArr = [];

  for (let i = 0; i < chunks.length; i++) {
    if (chunks[i] === 0) {
      continue;
    }

    const chunkArr = [];

    const hundreds = Math.floor(chunks[i] / 100);

    if (hundreds > 0) {
      chunkArr.push(`${words[hundreds]} Hundred`);
    }

    const tensAndOnes = chunks[i] % 100;

    if (tensAndOnes >= 20) {
      const tensPlace = Math.floor(tensAndOnes / 10);
      chunkArr.push(tens[tensPlace]);

      const onesPlace = tensAndOnes % 10;

      if (onesPlace > 0) {
        chunkArr.push(words[onesPlace]);
      }
    } else if (tensAndOnes > 0) {
      chunkArr.push(words[tensAndOnes]);
    }

    if (i > 0) {
      chunkArr.push(suffixes[i]);
    }

    wordsArr.unshift(chunkArr.join(" "));
  }

  return wordsArr.join(", ") + ".";
}
import { sayNumber } from './sayNumber';

describe('sayNumber', () => {
  it('should return "Zero." for 0', () => {
    expect(sayNumber(0)).toEqual('Zero.');
  });

  it('should return "Eleven." for 11', () => {
    expect(sayNumber(11)).toEqual('Eleven.');
  });

  it('should return "One million, forty three thousand, two hundred and eighty three." for 1043283', () => {
    expect(sayNumber(1043283)).toEqual('One million, forty three thousand, two hundred and eighty three.');
  });

  it('should return "Ninety trillion, three hundred and seventy six billion, ten thousand and twelve." for 90376000010012', () => {
    expect(sayNumber(90376000010012)).toEqual('Ninety trillion, three hundred and seventy six billion, ten thousand and twelve.');
  });
});




console.log(sayNumber(0)); // "Zero."
console.log(sayNumber(11)); // "Eleven."
console.log(sayNumber(1043283)); // "One million, forty three thousand, two hundred and eighty three."
console.log(sayNumber(90376000010012)); // "Ninety trillion, three hundred and seventy six billion, ten thousand and twelve."
