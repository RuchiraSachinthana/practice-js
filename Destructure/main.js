const daysOfweek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let[first, second, , , fifth, ...others] = daysOfweek;

console.log(first);
console.log(second);
console.log(fifth);
console.log(others);