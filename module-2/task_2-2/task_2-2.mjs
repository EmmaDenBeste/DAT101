"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let p11 = 2+3*2-4*6;
let p12 = 2+3*((2-4)*6);
printOut({p11, p12});

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
let p21 = ((25*1000) + (34*10)) / 25.4;
let p22 = p21.toFixed(2);
printOut(p22);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let p32 = (((3*24)+12)*60+14)+(45/60);

printOut(p32);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
let p41 = 6322.52 / (60*24);
let p42 = p41-Math.floor(p41);
    p41 = Math.floor(p41); //Total Days
let p43 = p42 * 24; 
    p42 = p43 - Math.floor(p43);
    p43 = Math.floor(p43); //Total Hours
let p44 = p42 * 60;
    p42 = p44 - Math.floor(p44);
    p44 = Math.floor(p44); //Total Minutes
let p45 = p42 * 60;
    p42 = p45 - Math.floor(p45);
    p45 = Math.floor(p45) //Total Seconds

printOut(`${p41}.${p43}.${p44}.${p45}`);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
let p51 = 54;
let p52 = Math.round(54* (76/8.6));

printOut(`USD: ${p51}, NOK: ${p52}`);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let p61 = "There is much between heaven and earth that we do not understand." ;
let p62 = p61.length;
let p63 = p61.charAt(19);
let p64 = p61.slice(34, 42);
let p65 = p61.indexOf("earth");

printOut(`There are ${p62} letters and ${p63} is the letter at position 19. The characters starting at position 35 is "${p64}" and "earth" starts at ${p65}`);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let p71 = false; 
if (5>3) {p71 = true} 
else {p71 = false};

let p72 = false; 
if (7 >= 7) {p72 = true} 
else {p72 = false};

let p73 = false; 
if ("a" > "b") {p73 = true} 
else {p73 = false};

let p74 = false; 
if ("1" < "a") {p74 = true} 
else {p74 = false};

let p75 = false; 
if ("2500" < "abcd") {p75 = true} 
else {p75 = false};

let p76 = false; 
if ("arne" !== "thomas") {p76 = true} 
else {p76 = false};

let p77 = false; 
if (2 === 5) {p77 = true} 
else {p77 = false};

let p78 = false; 
if ("abcd" > "bcd") {p78 = true} 
else {p78 = false};

printOut({p71, p72, p73, p74, p75, p76, p77, p78});

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
let p81 = Number("254");
let p82 = parseFloat("57.23");
let p83 = parseInt("25 kroner");

printOut({p81, p82, p83});

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let p91 = Math.ceil(Math.random()*360);

printOut({p91});

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let p101 = Math.floor(131/7)
let p102 = 131 % 7

printOut({p101, p102});