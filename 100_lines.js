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
