import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  conversionHour(hour: string, ampm: string) {
    let tens = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      let twenties = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty'];
      let hours = parseInt(hour);
      let firstNum = parseInt(hour[0]);
      let secondNum = parseInt(hour[1]);


    if (ampm == 'am') {
      if (hours == 12) {
        return 'zero dark';
      } else if (firstNum == 0) {
        return 'zero ' + tens[secondNum-1];
      } else if (firstNum == 1) {
        return tens[hours-1];
      } else {
        //catches 21+
        return twenties[firstNum] + ' ' + tens[secondNum-1];
      }
    } else {
      //catches pm
      let newHours = hours + 12;
      let strHours = newHours.toString();
      let newFirstNum = parseInt(strHours[0]);
      let newSecondNum = parseInt(strHours[1]);
      if (newHours == 24) {
        return tens[11];
      } else if (newFirstNum == 1) {
        return tens[newHours-1];
      } else if (newSecondNum == 0) {
        return twenties[newFirstNum];
      } else {
        //catches 21+
        return twenties[newFirstNum] + ' ' + tens[newSecondNum-1];
      }
    }
  }

  conversionMinute(minute: string) {
    let tens = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let twenties = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty'];
    let x = minute.split('');
    let y = parseInt(minute);
    let firstNum = parseInt(x[0]);
    let secondNum = parseInt(x[1]);

    if (firstNum < 1) {
      return 'zero ' + tens[y-1];
    } else if (firstNum == 1) {
      return tens[y-1];
    } else if (secondNum == 0) {
      return twenties[firstNum];
    } else {
      //returns 20 or more not intervals of 10
      return twenties[firstNum] + ' ' + tens[secondNum-1];
    }
  }

}
