let userName;
let todo = [];
function getReply(command) {
  let response;
  let text;
  let task;
  command.toLowerCase();
  switch (command) {
    case "Hello my name is Benjamin":
      text = command.split(" ");
      userName = text[text.length - 1];
      response = `nice to meet you ${userName}`;
      break;

    case "What is my name?":
      response = `your name is ${userName}`;
      break;
    case "Add fishing to my todo":
      text = command.split(" ");
      task = text[1];
      todo.push(task);
      response = ` ${task}added to your todo`;
      break;
    case "add singing in the shower to my todo":
      task = command.slice(4, 25);
      todo.push(task);
      response = ` ${task}added to your todo`;
      break;
    case "what is on my todo":
      response = `${todo.toString()} is on your list`;
      break;
    case "What day is it today?":
      const today = new Date();
      const style = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      response = today.toLocaleDateString('en-GB', style);
      break;

    case "what is 3 + 3":
      text = command.slice(8);
      response = `answer is ${eval(text)}`;
      break;

    case "set a timer for 4 minutes":
      text = command.split(" ");
      let timer = text[text.length - 2];
      response = `Timer set for ${timer} minutes`;
      setTimeout(() => {
        console.log("Timer completed");
      }, timer * 1000);

      break;
    case "remove fishing from my todo":
      text = command.split(" ");
      task = text[1];
      if (todo.includes(task)) {
        todo.splice(todo.indexOf("fishing"), 1);
        response = `${task} removed from todo`;
      } else {
        response = `${task} is not on your todo list`;
      }
      break;

    default:
      response = "Sorry, cannot help you.";
  }

  if (response) {
    return response;
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("add singing in the shower to my todo"));
console.log(getReply("what is on my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("set a timer for 4 minutes"));
console.log(getReply("remove fishing from my todo"));


//codewars
function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const array = str.split("");
  for (item of array) {
    if (vowels.includes(item)) {
      count++;
    }
  }
  return count;
}

//square number 
function squareDigits(num) {
  let squarednumber = [];
  const numberarray = Array.from(num.toString(), Number);
  for (item of numberarray)
    squarednumber.push(item * item);
  return Number(squarednumber.join(""));

}


//finding high and low value
function highAndLow(numbers) {
  let arrayNumber = numbers.split(" ");
  let result =
    Math.max.apply(null, arrayNumber) + " " + Math.min.apply(null, arrayNumber);

  return result;

}