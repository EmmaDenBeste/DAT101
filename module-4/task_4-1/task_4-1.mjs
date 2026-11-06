"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

const accountType = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kredittkonto",
  Pension: "Pensjonskonto"
}

class TAccount {
  #type;
  #balance;
  #withdrawCount;
  #currncyType;
  constructor(aType) {
    this.#type = aType;
    this.#balance = 0.0;
    this.#withdrawCount = 0;
    this.#currncyType = CurrencyTypes.NOK;
  }

  #currencyConvert(aType){
    return CurrencyTypes.NOK.value/this.#currncyType.value*aType.value;
  }
  toString() {
    return this.#type;
  }
  setType(aType) {
    printOut(`Kontotype endret fra ${this.#type} til ${aType}`);
    this.#type = aType;
    this.#withdrawCount = 0;
  }
  getBalance() {
    return this.#balance;
  }
  deposit(aAmount, aType = CurrencyTypes.NOK) {
    const newAmount = aAmount / this.#currencyConvert(aType);
    this.#balance += newAmount;
    this.#withdrawCount = 0;
    const den = this.#currncyType.denomination;
    const txtbalance = this.#balance.toFixed(2);
    printOut(`Innskudd av ${aAmount.toFixed(2)} ${aType.name}, ny salde er ${txtbalance}${den}`);
  }
  withdraw(aAmount, aType = CurrencyTypes.NOK) {
    if(aType === undefined){
      aType = CurrencyTypes.NOK;
    }
    let canWithdraw = true;
    switch (this.#type) {
      case accountType.Pension:
        canWithdraw = false;
        printOut("Du kan ikke ta ut fra Pensjonskonto");
        break;
      case accountType.Saving:
        if (this.#withdrawCount >= 3) {
          canWithdraw = false;
          printOut("Du kan ikke ta ut mer en 3 ganger fra en sparekonto");
        }
        break;
    }
    if (canWithdraw === true) {
      const newAmount = aAmount / this.#currencyConvert(aType);
      this.#balance -= newAmount;
      this.#withdrawCount++;
      const den = this.#currncyType.denomination;
      const txtbalance = this.#balance.toFixed(2);
      printOut(`Uttak av ${aAmount} ${aType.name}, ny saldo er ${txtbalance}${den}`);
    }
  }
  setCurrencyType(aType) {
    if (aType === this.#currncyType) {
      return;
    }
    printOut(`kontovaluta endret fra ${this.#currncyType.name} til ${aType.name}`);
    this.#balance *= this.#currencyConvert(aType);
    this.#currncyType = aType;
    const txtbalance = this.#balance.toFixed(2);
    printOut(`Ny saldo er: ${txtbalance}${this.#currncyType.denomination}`);
  }
}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const accountTypeKeys = Object.keys(accountType);

printOut(accountTypeKeys.toString());

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const myAccount = new TAccount(accountType.Normal);
printOut(`myAccount = ${myAccount.toString()}`);
myAccount.setType(accountType.Saving);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

myAccount.deposit(100);
myAccount.withdraw(25);
printOut(`Min konto har balanse: ${myAccount.getBalance()}`);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(accountType.Pension);
myAccount.withdraw(30);
myAccount.setType(accountType.Saving);
myAccount.withdraw(10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
myAccount.deposit(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.INR);
myAccount.withdraw(150.1585, CurrencyTypes.SEK);