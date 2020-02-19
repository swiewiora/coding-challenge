// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  const sentences = S.split(/[.?!]+/);
  let result = 0;
  for (let sentence of sentences) {
      const splittedSentence = sentence.split(" ");
      const words = splittedSentence.filter(el => el.length > 0);
      const length = words.length;
      if (length > result) result = length;
  }
  return result;
}
