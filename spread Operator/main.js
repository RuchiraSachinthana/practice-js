// joining arrays

const workingDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const restDays = ['Sat', 'Sun'];

const daysOfweek = [...workingDays,...restDays];
console.log(daysOfweek);