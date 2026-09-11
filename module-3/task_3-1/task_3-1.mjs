"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
let wakeupTime = 7;
let outputText1 = "No text";
if (wakeupTime === 7)
{
    outputText1 = "You can make it if you wake up at " + wakeupTime + " o'clock";
}
else if (wakeupTime === 8)
{
    outputText1 = "You can make it if you wake up at " + wakeupTime + " o'clock";
}
else 
{
    outputText1 = "If I wake up at " + wakeupTime + " o'clock  I have to take the car to school";
}

printOut(outputText1);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
let testNumber = -123;
let outputText4 = "No text";
if(testNumber > 0)
{
    outputText4 = "Positive";
}
else if (testNumber < 0)
{
    outputText4 = "Negative";
}
else
{
    outputText4 = "0";
}
printOut(outputText4);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
let randMB = Math.floor(Math.random()*8) + 1;
let outputText6 = "No text";
if (randMB >= 6)
{
    outputText6 = "Image is too large"
}
else if (randMB >= 4)
{
    outputText6 = "Thank you";
}
else 
{
    outputText6 = "The image is too small"
}
printOut(randMB);
printOut(outputText6);

printOut("--- Part 8, 9, 10 ----------------------------------------------------------------------------------------------");
let outputText8 = "No text";
let outputText10 = "No text";
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const monthDays =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const noOfMonth = monthList.length;
let selectedMonthNo =Math.floor(Math.random() * noOfMonth);
const monthName = monthList[selectedMonthNo];

if(monthName.indexOf("r") >= 0)
{
    outputText8 = "You must take vitamin D";
}
else
{
        outputText8 = "You do not need to take vitamin D";
}

if (selectedMonthNo == 3)
{
    outputText10 = "The gallery is accesible through the building next door";
}
else if(selectedMonthNo >= 2 && selectedMonthNo <= 4)
{
    outputText10 = "The gallery is closed this month";
}
else
{
    outputText10 = "The gallery is open";
}
printOut(monthName + ": " + outputText8);
printOut("In " + monthName + " there are " + monthDays[selectedMonthNo] + " days");
printOut(selectedMonthNo);
printOut(outputText10);
