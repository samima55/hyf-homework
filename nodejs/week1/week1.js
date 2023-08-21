const arguments = process.argv.slice(2);


if (arguments.length === 0) {
    console.log(" give numbers  ");
  } else {
    const numbers = arguments.map(Number).filter((num) => !isNaN(num));
    if (numbers.length === 0) {
        console.log("give more than 0 zero arguments ");
      } else {
        const sum = numbers.reduce((acc, cur) => acc + cur, 0);
        const avg = sum / numbers.length;
        console.log(`Average is  ${avg}`);
      }}