// nested functions
// basketball will be in first execution context.  child functions will be called internally


let num = Math.floor(Math.random() * 5);

let damianLillard = {
  ppg: 27.0,
  apg: 5.9,
  rpg: 4.9,
}
let cjMccollum = {
  ppg: 23.0,
  apg: 3.6,
  rpg: 3.6,
}
let jusufNurkic = {
  ppg: 15.2,
  apg: 3.2,
  rpg: 10.4,
}
let alfarouqAminu = {
  ppg: 8.7,
  apg: 1.6,
  rpg: 7.4,
}
let evanTurner = {
  ppg: 9.0,
  apg: 3.2,
  rpg: 3.8,
}
let meyersLeonard = {
  ppg: 5.4,
  apg: 1.0,
  rpg: 3.2,
}
let noahVonleh = {
  ppg: 4.4,
  apg: 0.4,
  rpg: 5.2,
}
let jakeLayman = {
  ppg: 2.2,
  apg: 0.3,
  rpg: 0.7,
}
let shabazzNapier = {
  ppg: 4.1,
  apg: 1.3,
  rpg: 1.2,
}
let mauriceHarkless = {
  ppg: 10.0,
  apg: 1.1,
  rpg: 4.4,
}
let patConnaughton = {
  ppg: 2.5,
  apg: 0.7,
  rpg: 1.3,
}
let edDavis = {
  ppg: 27.0,
  apg: 0.6,
  rpg: 5.3,
}
let calebSwannigan = {
  ppg: 0.0,
  apg: 0.0,
  rpg: 0.0,
}
let zachCollins = {
  ppg: 0.0,
  apg: 0.0,
  rpg: 0.0,
}


function threeQuestions() {

}

function race(v1, v2, g) {
  let feetPerSecond1 = v1*60*60
  let feetPerSecond2 = v2*60*60
  let time = 0

}

function removeSmallest(numbers) {
  let smallest = 0
  let badNum = []
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < numbers[smallest]) {
      smallest = i
    }
  }

  let partOne = numbers.slice(0,smallest)
  let partTwo = numbers.slice((smallest + 1),numbers.length)
  return partOne.concat(partTwo)
}

var players = {
  lillard: {
    name: 'dame',
    number: 0,
    pos: 'pg',
    attr: 'captain',
    ppg: 29,
    rpg: 2.3,
    apg: 4.5,
    tpg: function() {
      this.tpg = this.ppg * 82;
    },
  },

  mccollum: {
    name: 'cj',
    number: 3,
    pos: 'sg',
    attr: 'shootinStud',
    ppg: 29,
    rpg: 1.3,
    apg: 2.5,
    tpg: function() {
      this.tpg = this.ppg * 82;
    },
  },
};

for (const prop in players) {
  if (players[prop].ppg > 28) {
    console.log(
      prop +
        ' is clearly an All-Star player with ' +
        players[prop].ppg +
        ' points per game'
    );
  }
}

let currentYear = 2017
var years = [1990, 1992, 2000, 2010, 1998]
var blankArr = new Array

function acceptableAge(array) {
  for (j = 0; j < array.length; j++) {
    if (currentYear - array[j] >= 18) {
      blankArr.push(true)
    } else {
      blankArr.push(false)
    }
  }
}

function accum(s) {
	let splitString = s.split("");
	console.log(splitString)
  let string = ""
  for (let i = 0; i < splitString.length; i++) {
    for (let j = 0; j < i+1; j++) {
    if (j == 0) {
      string = string + splitString[i].toUpperCase()
      } else {
        string = string + splitString[i]
      }
    }
    if (i == splitString.length - 1) {
    string = string
    } else {
      string = string + "-"
    }
  }
  console.log(string);
}

// guess the NBA player.  NBA player objects, pick a question, then enter a guss.

let sock = {
  color: "white",
  comesInMultiples: "yes",
  shape: "semi-cylindrical",
}

let rabbit = {
  color: "white",
  comesInMultiples: "no",
  shape: "varied",
}

let basketball = {
  color: "brown",
  comesInMultiples: "no",
  shape: "spherical",
}

let spinach = {
  color: "green",
  comesInMultiples: "yes",
  shape: "round/oblong",
}

let mountain = {
  color: "white",
  comesInMultiples: "no",
  shape: "cone",
}


function DNAStrand(dna){
  let letters = []
  let splitDNA = dna.split("");
  for (var i = 0; i < splitDNA.length; i++) {
    if (splitDNA[i] == "G") {
      letters.push("C")
    } else if (splitDNA[i] == "C") {
      letters.push("G")
    } else if (splitDNA[i] == "A") {
      letters.push("T")
    } else if (splitDNA[i] == "T") {
      letters.push("A")
    }
  }
  return letters.join("")
}


function longestConsec(strarr, k) {
  let longest = ""
  if (k <= 0 || k > strarr.length) {
    return ""
  }
  if (k == 1) {
    let newS = strarr.sort()
    return newS[-1]
  }

  for (var i = 0; i < strarr.length-1; i++) {
    let innerLength = ""
    for (let j = i; j < i+k; j++) {
      if (j == strarr.length) {
        break
      }
      innerLength += strarr[j]
    }
    if (innerLength.length > longest.length) {
      longest = innerLength
      innerLength = ""
    }
  }
  return longest
}

function longestConsec(strarr, k) {
  if( strarr.length==0 || k> strarr.length || k <1 ) return "";
  let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
      i = lens.indexOf( Math.max(...lens) );
  return strarr.slice(i,i+k).join('')
}
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let curDate = currentDate.split(" ");
  let expDate = expirationDate.split(" ");
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let curMonth = months.indexOf(curDate[0]);
  let expMonth = months.indexOf(expDate[0]);
  let curDay = parseInt(curDate[1]);
  let expDay = parseInt(expDate[1]);
  let curYear = parseInt(curDate[2]);
  let expYear = parseInt(expDate[2]);
  if (enteredCode === correctCode) {
    if (curYear < expYear) {
      return true
    } else if (curYear == expYear && curMonth < expMonth) {
      return true
    } else if (curMonth == expMonth && curDay <= expDay) {
      return true
    }
  }
  return false
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let odd = A[i]
    let count = 0
    for (let j = 0; j < A.length; j++) {
      if (A[j] == A[i]) {
        count += 1
      }
    }
    if (count % 2 !== 0) {
      return A[i]
    }
  }
}

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });

  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

// Didn't solve
function rot13(message){
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let splitMessage = message.split("");
  let newMessage = []
  splitMessage.forEach(function(letter, index, array) {
      if (alpha.includes(letter.toLowerCase())) {
        if (letter !== letter.toLowerCase()) {
          if (alpha.indexOf(letter.toLowerCase()) >= 13) {
            newMessage.push(alpha[alpha.indexOf(letter)-13])
          } else {
          newMessage.push(alpha[alpha.indexOf(letter)+ 13])
        }
      } else {
          if (alpha.indexOf(letter) >= 13) {
            newMessage.push(alpha[alpha.indexOf(letter)-13])
          } else {
          newMessage.push(alpha[alpha.indexOf(letter)+ 13])
        }
      }
    } else {
      newMessage.push(letter)
    }
  })
  console.log(newMessage.join(""))
}


function findUniq(arr) {
  let dups = []
  let uniq = 0
  for (let i = 0; i < arr.length; i++) {
    // if includes bad
    let value = arr[i]
    if (dups.includes(value)) {
      continue
    }
    // for loop checking i + 1 at start seeing if it matches current val
    for (var j = i+1; j < arr.length; j++) {
      if (dups.includes(arr[j])) {
        continue
      } else if (arr[j] === value) {
        dups.push(arr[j])
        continue
      }
    }
    if (dups.includes(value) == false) {uniq = value}
  }
  return uniq
}

function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

// Gap in Primes
function gap(g, m, n) {

}

// Calculating with Functions
// function zero() {}
function one() {
  return 1
}
function two() {
  return 2
}
function three() {
  return 3
}
function four() {
  return 4
}
function five() {
  return 5
}
function six() {
  return 6
}
function seven() {
  return 7
}
function eight() {
  return 8
}
function nine() {
  return 9
}

function plus() {
  return +
}
function minus() {
  return -
}
function times() {
  return *
}
function dividedBy() {
  return /
}
