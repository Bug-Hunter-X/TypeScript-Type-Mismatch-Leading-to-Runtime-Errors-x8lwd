function printNumber(num: number): void {
  console.log(num);
}

function printNumberSafe(num: unknown): void {
  if (typeof num === 'number') {
    console.log(num);
  } else {
    console.error('Invalid input: Expected a number.');
  }
}

printNumberSafe(10); // Works correctly
printNumberSafe("hello"); // Logs an error message instead of throwing.