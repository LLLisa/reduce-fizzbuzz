const fizzbuzz = () => {
  return [...Array(100).keys()].reduce((a, b) => {
    b++;
    a.push(!(b % 15) ? 'fizzbuzz' : !(b % 5) ? 'buzz' : !(b % 3) ? 'fizz' : b);
    return a;
  }, []);
};

console.log(fizzbuzz());
