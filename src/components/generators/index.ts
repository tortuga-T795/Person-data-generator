import * as rand from '../random';
import {toTimeNumber, reformatDate} from "../util/time";
// @ts-ignore
import {alphabet} from "../assets/alphabet";
// @ts-ignore
import {country} from '../assets/country-data';


export const gmail = (words: Array<string>):string => {
    const random = Math.floor(Math.random() * 3);
    const start = rand.arrayValue(words)+'.'+rand.arrayValue(words);
    const end = "@gmail.com";
    switch (random) {
        case 1:
            return start + end;
        case 2:
            return start+'.'+rand.arrayValue(words)+end;
        default:
            return start+'.'+rand.arrayValue(words)+'.'+rand.arrayValue(words)+end;
    }
};

export const telephone = ():string => {
    return "+"+ +rand.worldNumber()+"("+rand.range(0, 999)+")"+rand.range(0, 999)+"-"+rand.range(0, 99)+"-"+rand.range(0, 99);
};

export const street = (words: Array<string>):string => {
    const street = rand.arrayValue(words);
    return street.slice(0, 1).toUpperCase() + street.slice(1) + " street";
};

export const date = () => {
    const date = new Date(rand.range(1821, 2019), rand.range(0, 12), rand.range(0, 29));
    return toTimeNumber(date.getDate())+'.'
        +toTimeNumber(date.getMonth())+'.'
        +date.getFullYear()
};

export const pasportIndificator = (sex: string, birthday: string, telephone: string, alpha3: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let century = 0;
    // eslint-disable-next-line eqeqeq
    if((+birthday.slice(6) > 1800 && +birthday.slice(6) < 1991) && sex == "male"){
        century = 1;
        // eslint-disable-next-line eqeqeq
    } else if((+birthday.slice(6) > 1800 && +birthday.slice(6) < 1991) && sex == "female") {
        century = 2;
        // eslint-disable-next-line eqeqeq
    } else if(sex == "male") {
        century = 3;
    } else {
        century = 4;
    }
    let iso = 0;
    for(let i = 1; i < 251; ++i) {
        // eslint-disable-next-line eqeqeq
        if(country[i].iso == telephone.slice(1,4))
            iso = country[i].alpha3;
    }
    const amount = (1000+rand.range(0, 112)).toString().slice(1);
    return century+reformatDate(birthday)+alphabet[rand.range(0, alphabet.length)]+amount+iso+rand.range(0,9);
};

