export function count_occurence(text) {
    const words = text.match(/\w+(['’]?\w+)?/g);
    const wordCount = new Map();
    words.forEach(word => {
      word = word.toLowerCase();
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    });
    wordCount.forEach((count, word) => {
      console.log(`La parola "${word}" ha frequenza: ${count}`);
    });
  
    return wordCount;
  }
  