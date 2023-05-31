// W function

//Joey function
function fib() {
  let counter = 0;
  let prev = 1;
  let next = 1;

  console.log(0);
  console.log(prev);
  console.log(next);

  while (counter < 7) {
    let num = prev + next;
    prev = next;
    next = num;
    console.log(num);
    counter++;
  }
}

fib();
