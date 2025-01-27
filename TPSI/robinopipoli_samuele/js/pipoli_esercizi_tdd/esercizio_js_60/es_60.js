export const is_anagram = (arr) => {
    const map = {};
    arr.forEach(word => {
      const sortedWord = word.split('').sort().join('');
      if (map[sortedWord]) {
        map[sortedWord].push(word);
      } else {
        map[sortedWord] = [word];
      }
    });
    return arr.filter(word => map[word.split('').sort().join('')].length === 1);
  };
  