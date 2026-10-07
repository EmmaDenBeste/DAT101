"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let countUpString = "";
let countDownString = "";
let countToValue = 10;
for (let i = 1, j = countToValue; i <= countToValue; i++, j--) {
    if (i < countToValue) {
        countUpString += i + ", ";
        countDownString += j + ", ";
    }
    else {
        countUpString += i;
        countDownString += j;
    }

}
printOut({ countUpString, countDownString });

printOut("--- Part 2 and 3 ----------------------------------------------------------------------------------------------");
let myGuess = 67;
let computerGuess = null;
let totalGuesses = 0;
let maxValue = 1000000;
let startTime = Date.now();
do {
    computerGuess = Math.round(Math.random() * maxValue);
    totalGuesses++;
} while (computerGuess !== myGuess);
let totalMilliseconds = Date.now() - startTime;

printOut("Your guess is " + myGuess + " ,it took me " + totalGuesses + " attempts and " + totalMilliseconds + " milliseconds to guess it.");

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
let primes = "Primes: ";
let q = 2;
let isPrime = true;
while (q < 200) {
    for (let w = 2; w < q; w++) {
        if (q % w === 0) {
            isPrime = false;
        }
    }
    if (isPrime == true) {
        if (primes == "Primes: ") {

            primes += q;
        }
        else {
            primes += ", " + q;
        }

    }
    isPrime = true;
    q++;
}
printOut(primes);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
let maxK = 7;
let maxR = 9;

let stringToPrint = "";
for (let r = 1; r <= 7; r++) {
    for (let k = 1; k <= 9; k++) {
        stringToPrint += "K" + k + "R" + r + " ";
    }
    printOut(stringToPrint);
    stringToPrint = "";
}

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let student = 0;
let gradeString = "";
for (let i = 1; i <= 5; i++) {
    student = Math.floor(Math.random() * 236) + 1;
    if (student >= (236 / 100 * 89)) {
        gradeString += "A";
    }
    else if (student >= (236 / 100 * 77)) {
        gradeString += "B";
    }
    else if (student >= (236 / 100 * 65)) {
        gradeString += "C";
    }
    else if (student >= (236 / 100 * 53)) {
        gradeString += "D";
    }
    else if (student >= (236 / 100 * 41)) {
        gradeString += "E";
    }
    else {
        gradeString += "F";
    }
    if (i < 5) {
        gradeString += ", ";
    }

}
printOut(gradeString);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

let dices = [0, 0, 0, 0, 0, 0];
let checkingForDupes = false;
RerollDice();

let yathzeeText = "No text";
let throwCounter = 0;
function RerollDice() {
    for (let i = 0; i < 6; i++) {
        dices[i] = Math.ceil(Math.random() * 6)
    }
}

//Straight
let dupes = true;
RerollDice();
while (dupes == true) {
    dupes = false;
    for (let p = 0; p < dices.length; p++) {
        if ((dices[p] == dices[0] && p != 0) || (dices[p] == dices[1] && p != 1) || (dices[p] == dices[2] && p != 2) || (dices[p] == dices[3] && p != 3) || (dices[p] == dices[4] && p != 4) || (dices[p] == dices[5] && p != 5)) {
            dupes = true;
        }
    }
    if (dupes == true) {
        RerollDice();
        throwCounter++;
    }
}
yathzeeText = "You landed a straight! " + dices[0] + ", " + dices[1] + ", " + dices[2] + ", " + dices[3] + ", " + dices[4] + ", " + dices[5] + ". " + "It only took " + throwCounter + " tries!";
printOut(yathzeeText);


//3 pairs
RerollDice();
let j = 0;
let k = 1;
let remainingNumbers = [];
let newDices = []
let oldremainingNumbers = [8, 8, 8, 8, 8, 8];
remainingNumbers = [...dices];
checkingForDupes = true;
throwCounter = 0;
CheckForDupes();
function CheckForDupes() {
    j = 0;
    k = 1;
    remainingNumbers = [];
    newDices = [];
    oldremainingNumbers = [8, 8, 8, 8, 8, 8];
    remainingNumbers = [...dices];
    checkingForDupes = true;
    while (checkingForDupes == true) {
        for (let i = 1; i < remainingNumbers.length; i++) {
            if (remainingNumbers[0] == remainingNumbers[i]) {
                newDices[j] = remainingNumbers[i];
                remainingNumbers.splice(i, 1);
                newDices[k] = remainingNumbers[0];
                remainingNumbers.splice(0, 1);
                j += 2;
                k += 2;
            }
        }
        if (oldremainingNumbers == remainingNumbers) {
            if (remainingNumbers[0] != remainingNumbers[1]) {
                RerollDice();
                throwCounter++;
                CheckForDupes();
            }
            if (remainingNumbers[0] != undefined) {
                newDices[4] = remainingNumbers[0];
                newDices[5] = remainingNumbers[1];
            }
            checkingForDupes = false;

        }
        oldremainingNumbers = remainingNumbers;
    }
}
yathzeeText = "You landed 3 pairs! " + newDices[0] + ", " + newDices[1] + ", " + newDices[2] + ", " + newDices[3] + ", " + newDices[4] + ", " + newDices[5] + ". " + "It only took " + throwCounter + " tries!";
printOut(yathzeeText);

//Tower
RerollDice();
j = 0;
k = 1;
remainingNumbers = [];
newDices = []
oldremainingNumbers = [8, 8, 8, 8, 8, 8];
remainingNumbers = [...dices];
checkingForDupes = true;
throwCounter = 0;
CheckForDupesTower();
function CheckForDupesTower() {
    j = 0;
    k = 1;
    remainingNumbers = [];
    newDices = [];
    oldremainingNumbers = [8, 8, 8, 8, 8, 8];
    remainingNumbers = [...dices];
    checkingForDupes = true;
    while (checkingForDupes == true) {
        for (let i = 1; i < remainingNumbers.length; i++) {
            if (remainingNumbers[0] == remainingNumbers[i]) {
                newDices[j] = remainingNumbers[i];
                remainingNumbers.splice(i, 1);
                newDices[k] = remainingNumbers[0];
                remainingNumbers.splice(0, 1);
                j += 2;
                k += 2;
            }
        }
        if (oldremainingNumbers == remainingNumbers) {
            if (remainingNumbers[0] != remainingNumbers[1]) {
                RerollDice();
                throwCounter++;
                CheckForDupesTower();
            }
            if (remainingNumbers[0] != undefined) {
                newDices[4] = remainingNumbers[0];
                newDices[5] = remainingNumbers[1];
            }
            if (newDices[0] == newDices[2] || newDices[2] == newDices[4] || newDices[4] == newDices[2]) {
                if (newDices[0] != newDices[2] || newDices[2] != newDices[4] || newDices[4] != newDices[2]) {
                    checkingForDupes = false;
                }
            }
            else {
                RerollDice();
                throwCounter++;
                CheckForDupesTower();
            }

        }
        oldremainingNumbers = remainingNumbers;
    }
}
yathzeeText = "You landed a tower! " + newDices[0] + ", " + newDices[1] + ", " + newDices[2] + ", " + newDices[3] + ", " + newDices[4] + ", " + newDices[5] + ". " + "It only took " + throwCounter + " tries!";
printOut(yathzeeText);

//Yatzee
RerollDice();
while (dices[0] != dices[1] || dices[1] != dices[2] || dices[2] != dices[3] || dices[3] != dices[4] || dices[4] != dices[5]) {
    RerollDice();
    throwCounter++;
}
yathzeeText = "You landed a Yatzee! " + dices[0] + ", " + dices[1] + ", " + dices[2] + ", " + dices[3] + ", " + dices[4] + ", " + dices[5] + ". " + "It only took " + throwCounter + " tries!";
printOut(yathzeeText);
