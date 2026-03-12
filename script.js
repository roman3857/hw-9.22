function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);

function calculateEngravingPrice(message, pricePerWord) {
  const trimmedMessage = message.trim();

  if (trimmedMessage === "") {
    return 0;
  }
  const words = trimmedMessage.split(/\s+/);
  const wordCount = words.length;
  return wordCount * pricePerWord;
}

console.log(calculateEngravingPrice("Hello world", 10));

function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}


console.log(formatString("Curabitur ligula sapien, tincidunt non."));

function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();

  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}


console.log(checkForSpam("Latest technology news"));


let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число");

  if (input === null) {
    break;
  }

  const value = Number(input);

  if (isNaN(value)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }

  numbers.push(value);
}

for (const number of numbers) {
  total += number;
}

if (numbers.length > 0) {
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
