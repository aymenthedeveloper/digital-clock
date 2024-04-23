let today = Date.now();
let time = Math.trunc(today / 1000) % (3600 * 24) + 3600;
let hh1, hh2, mm1, mm2, ss1, ss2, timeLeft;
function createClockNumbers(elementsContainer, elementsNumber){
  elementsContainer.style.setProperty('--x', 0);
  for (let i = 0; i <= elementsNumber; i++) {
    const n = document.createElement('span');
    n.classList.add('number')
    if (i === 0 ) {n.classList.add('current')}
    n.innerText = i;
    elementsContainer.appendChild(n)
  }
}

function getCurrentNumber(elementsContainer, prevNumber, currentNumber, currentIndex){
  prevNumber.classList.remove('current');
  currentNumber.classList.add('current');
  elementsContainer.style.setProperty('--x', currentIndex);
  return currentNumber;   
}

const hours1 = document.querySelector('.hours1');
const hours2 = document.querySelector('.hours2');
const minutes1 = document.querySelector('.minutes1');
const minutes2 = document.querySelector('.minutes2');
const seconds2 = document.querySelector('.seconds2');
const seconds1 = document.querySelector('.seconds1');

createClockNumbers(hours1, 2)
createClockNumbers(hours2, 9)
createClockNumbers(minutes1, 5)
createClockNumbers(minutes2, 9)
createClockNumbers(seconds1, 5)
createClockNumbers(seconds2, 9)

const h1 = hours1.children;
const h2 = hours2.children;
const m1 = minutes1.children;
const m2 = minutes2.children;
const s1 = seconds1.children;
const s2 = seconds2.children;

let [prevHoursNumber1] = h1;
let [prevHoursNumber2] = h2;
let [prevMinutesNumber1] = m1;
let [prevMinutesNumber2] = m2;
let [prevSecondsNumber1] = s1;
let [prevSecondsNumber2] = s2;


setInterval(() => {
  time++
  hh1 = Math.floor(time / 36000) % 3;
  timeLeft = time % 36000;
  prevHoursNumber1 = getCurrentNumber(hours1, prevHoursNumber1, h1[hh1], hh1);
  hh2 = Math.floor(time / 3600) % 10;
  timeLeft = time % 3600;
  prevHoursNumber2 = getCurrentNumber(hours2, prevHoursNumber2, h2[hh2], hh2);
  mm1 = Math.floor(timeLeft / 600) % 6;
  prevMinutesNumber1 = getCurrentNumber(minutes1, prevMinutesNumber1, m1[mm1], mm1);
  timeLeft = time % 600;
  mm2 = Math.floor(timeLeft / 60) % 10;
  prevMinutesNumber2 = getCurrentNumber(minutes2, prevMinutesNumber2, m2[mm2], mm2);
  timeLeft = timeLeft % 60;
  ss1 = Math.trunc(timeLeft / 10) % 6;
  prevSecondsNumber1 = getCurrentNumber(seconds1, prevSecondsNumber1, s1[ss1], ss1);
  ss2 = timeLeft % 10;
  prevSecondsNumber2 = getCurrentNumber(seconds2, prevSecondsNumber2, s2[ss2], ss2);
},1000)