let time = 38438;
let hh1, hh2, mm1, mm2, ss1, ss2, timeLeft;
function createClockNumbers(elementsContainer, elementsNumber, elementsClass){
  for (let i = 0; i <= elementsNumber; i++) {
    const n = document.createElement('div');
    n.classList.add(elementsClass)
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
createClockNumbers(hours1, 2, 'h1')
const h1 = document.querySelectorAll('.h1');
let prevHoursNumber1 = h1[0];

const hours2 = document.querySelector('.hours2');
createClockNumbers(hours2, 9, 'h2')
const h2 = document.querySelectorAll('.h2');
let prevHoursNumber2 = h2[0];

const minutes1 = document.querySelector('.minutes1');
createClockNumbers(minutes1, 5, 'm1')
const m1 = document.querySelectorAll('.m1');
let prevMinutesNumber1 = m1[0];

const minutes2 = document.querySelector('.minutes2');
createClockNumbers(minutes2, 9, 'm2')
const m2 = document.querySelectorAll('.m2');
let prevMinutesNumber2 = m2[0];

const seconds1 = document.querySelector('.seconds1');
createClockNumbers(seconds1, 5, 's1')
const s1 = document.querySelectorAll('.s1');
let prevDigit1 = s1[0];

const seconds2 = document.querySelector('.seconds2');
createClockNumbers(seconds2, 9, 's2')
const s2 = document.querySelectorAll('.s2');
let prevDigit2 = s2[0];


setInterval(() => {
  time++
  if (time >= 3600 * 24) {time = 0;}
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
  prevDigit1 = getCurrentNumber(seconds1, prevDigit1, s1[ss1], ss1);
  ss2 = timeLeft % 10;
  prevDigit2 = getCurrentNumber(seconds2, prevDigit2, s2[ss2], ss2);
},1000)

