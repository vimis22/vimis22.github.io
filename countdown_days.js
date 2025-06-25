//Counting Down Days
const deadline = new Date('2025-08-01')

const today = new Date();

const timeDifference = deadline-today;

const daysRemaining = Math.ceil(timeDifference/(1000*60*60*24));

document.getElementById('countdown').innerText = `Days remaining: ${daysRemaining}`;
