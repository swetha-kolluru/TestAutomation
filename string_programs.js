// Ten beginner-friendly JavaScript string programs with step-by-step solutions.

// 1. Reverse a string
// Steps: split the string into characters, reverse the array, then join it back.
function reverseString(text) {
  return text.split("").reverse().join("");
}

// 2. Check whether a string is a palindrome
// Steps: lowercase the text, remove non-alphanumeric characters, reverse it,
// then compare the cleaned text with its reverse.
function isPalindrome(text) {
  const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedText = cleanedText.split("").reverse().join("");
  return cleanedText === reversedText;
}

// 3. Count vowels in a string
// Steps: lowercase the text, inspect each character, and count a character
// whenever it is one of a, e, i, o, or u.
function countVowels(text) {
  const vowels = "aeiou";
  let count = 0;

  for (const character of text.toLowerCase()) {
    if (vowels.includes(character)) {
      count += 1;
    }
  }

  return count;
}

// 4. Count the frequency of each character
// Steps: visit each character and increase its count in a frequency object.
function characterFrequency(text) {
  const frequency = {};

  for (const character of text) {
    frequency[character] = (frequency[character] || 0) + 1;
  }

  return frequency;
}

// 5. Remove duplicate characters while preserving their first occurrence
// Steps: create a Set from the characters, then join the unique characters.
function removeDuplicateCharacters(text) {
  return [...new Set(text)].join("");
}

// 6. Check whether two strings are anagrams
// Steps: lowercase both strings, remove spaces and punctuation, sort their
// characters, then compare the sorted results.
function areAnagrams(firstText, secondText) {
  const normalize = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");

  return normalize(firstText) === normalize(secondText);
}

// 7. Find the first non-repeating character
// Steps: count every character, then scan the text again and return the first
// character whose count is one. Return null if every character repeats.
function firstNonRepeatingCharacter(text) {
  const frequency = characterFrequency(text);

  for (const character of text) {
    if (frequency[character] === 1) {
      return character;
    }
  }

  return null;
}

// 8. Capitalize the first letter of every word
// Steps: split on whitespace, capitalize each non-empty word's first letter,
// lowercase the rest, then join the words with spaces.
function capitalizeWords(text) {
  return text
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// 9. Count the words in a string
// Steps: trim outer whitespace, return zero for empty input, otherwise split
// on one or more whitespace characters and count the resulting words.
function countWords(text) {
  const trimmedText = text.trim();
  return trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;
}

// 10. Find the longest word in a string
// Steps: split the text into words, then keep the longest word seen so far.
// Return an empty string when the input contains no words.
function findLongestWord(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Example runs for all ten programs
console.log("1. Reverse:", reverseString("JavaScript"));
console.log("2. Palindrome:", isPalindrome("A man, a plan, a canal: Panama"));
console.log("3. Vowel count:", countVowels("JavaScript"));
console.log("4. Character frequency:", characterFrequency("hello"));
console.log("5. Remove duplicates:", removeDuplicateCharacters("programming"));
console.log("6. Anagrams:", areAnagrams("Listen", "Silent"));
console.log("7. First non-repeating character:", firstNonRepeatingCharacter("swiss"));
console.log("8. Capitalize words:", capitalizeWords("learn javascript step by step"));
console.log("9. Word count:", countWords("JavaScript strings are useful"));
console.log("10. Longest word:", findLongestWord("JavaScript has many string methods"));