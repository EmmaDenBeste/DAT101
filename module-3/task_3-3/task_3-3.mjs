"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

TodaysDate();
function TodaysDate() {
    let d = new Date().toLocaleDateString("no-NB");
    printOut(d);
}

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

let _2XKO = new Date(2025, 4, 14);
let daysSince2XKO = 0;
DaysSince2XKO();
function DaysSince2XKO() {
    printOut("It has been " + Math.floor((Date.now() - _2XKO.getTime()) / 1000 / 60 / 60 / 24) + " days since 2XKO released!");
}

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let rCircle = 67;
CircleCalc();
function CircleCalc() {
    let dCircle = rCircle * 2;
    let circCircle = rCircle * Math.PI * 2;
    let aCircle = (rCircle ^ 2) * Math.PI;

    printOut("Radius: " + Math.round(rCircle) + ", Diameter: " + Math.round(dCircle) + ", Circumfrence: " + Math.round(circCircle) + ", Area: " + Math.round(aCircle));
}

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
let wRectangle = 10;
let hRectangle = 7;
RectangleCalc();
function RectangleCalc() {
    let circRectangle = 2 * (wRectangle + hRectangle);
    let aRectangle = wRectangle * hRectangle;

    printOut("Width: " + Math.round(wRectangle) + ", Length: " + Math.round(hRectangle) + ", Circumfrence: " + circRectangle + ", Area: " + aRectangle);
}

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
let temperature = 273.15;
let temperatureType = "Kelvin";

let cTemp = null;
let fTemp = null;
let kTemp = null;
CalculateTemperature(temperature, temperatureType);
function CalculateTemperature(aTemperature, aTemperatureType) {
    if (temperatureType == "Celcius") {
        cTemp = Math.round(temperature);
        fTemp = Math.round(temperature * (9 / 5) + 32);
        kTemp = Math.round(temperature + 273.15);
        printOut("Celcius: " + cTemp + ", Fahrenheit: " + fTemp + ", Kelvin: " + kTemp);
    }
    else if (temperatureType == "Fahrenheit") {
        cTemp = Math.round((temperature - 32) * (5 / 9));
        fTemp = Math.round(temperature);
        kTemp = Math.round((temperature - 32) * (5 / 9) + 273.15);
        printOut("Celcius: " + cTemp + ", Fahrenheit: " + fTemp + ", Kelvin: " + kTemp);
    }
    else if (temperatureType == "Kelvin") {
        cTemp = Math.round(temperature - 273.15);
        fTemp = Math.round((temperature - 273.15) * (9 / 5) + 32);
        kTemp = Math.round(temperature);
        printOut("Celcius: " + cTemp + ", Fahrenheit: " + fTemp + ", Kelvin: " + kTemp);
    }
    else {
        printOut("Something went wrong");
    }
}

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let price = 100;
CalculatePrice(price, "NORMAL");
CalculatePrice(price, "Food");
CalculatePrice(price, "hoTel");
CalculatePrice(price, "saloon");

function CalculatePrice(aPrice, aVAT) {
    if (aVAT.toLowerCase() == "normal") {
        printOut("Normal - Gross: " + aPrice / (0.25 + 1));
    }
    else if (aVAT.toLowerCase() == "food") {
        printOut("Food - Gross: " + aPrice / (0.15 + 1));
    }
    else if (aVAT.toLowerCase() == "hotel" || aVAT.toLowerCase() == "transport" || aVAT.toLowerCase() == "cinema") {
        printOut("Services - Gross: " + aPrice / (0.1 + 1));
    }
    else {
        printOut("Unknown VAT group");
    }
}

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let speed = 10;
let distance = 7;
let time = null;
let missingVar;
let missing = 0;


printOut(CalculateSpeed(speed, distance, time))

function CalculateSpeed(_speed, _distance, _time) {

    if (speed === null) missing++;
    if (distance === null) missing++;
    if (time === null) missing++;

    if (missing >= 2) {
        printOut(NaN);
        return;
    }

    if (_speed == null) {
        missingVar = _distance / _time;
        return "The missing variable is " + _distance / _time;
    }
    else if (_distance == null) {
        return "The missing variable is " + _speed * _time;
    }
    else if (_time == null) {
        return "The missing variable is " + _distance / _speed;
    }
    else {
        return (NaN);
    }
}

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

let string = "Tada"

stringCheck(string, 32, "x", true)

function stringCheck(_string, _maxSize, _character, _fillSide) {
    let stringDiffrence = _maxSize - _string.length;
    for (let i = 0; i < stringDiffrence; i++)
        if (i >= 0) {
            if (_fillSide == true) {
                _string = _character + _string;
            }
            else {
                _string = _string + _character;
            }

        }
    printOut(_string);
}


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

let antallVenstreSide = 2;
let antallHoyreSide = 1;
let verdi = 1;

let calculatedLeft = 0;
let calculatedRight = 0;
let equal = true;
let leftSideString = "";
let rightSideString = "";
for (let i = 0; i < 200; i++) {
    if (equal) {
        for (let j = 0; j < antallVenstreSide; j++) {
            calculatedLeft += verdi;
            if (j !== 0) {
                leftSideString += ` + ${verdi}`;
            }
            else {
                leftSideString += `${verdi}`;
            }
            verdi++;
        }
        for (let j = 0; j < antallHoyreSide; j++) {
            calculatedRight += verdi;
            if (j !== 0) {
                rightSideString += ` + ${verdi}`;
            }
            else {
                rightSideString += `${verdi}`;
            }
            verdi++;
        }
        printOut(leftSideString + " = " + rightSideString);
        antallHoyreSide++;
        antallVenstreSide++;
    }
    else{
        printOut("Not equal");
    }
    leftSideString = "";
    rightSideString = "";
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let number = 4;
let factorialNumber;
let i = null;
FactorNumber(number);
function FactorNumber(_number) {
    if (i === null) {
        i = _number - 1;
    }
    _number = _number * i;
    i--;
    if (i > 0) {
        FactorNumber(_number);
    }
    else {
        printOut(_number);
    }
}


