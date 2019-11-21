import * as rand from '../random';
import {cutNumber, reformatDate} from "../util/time";
// @ts-ignore
import {alphabet} from "../assets/alphabet";
// @ts-ignore
import {country} from '../assets/country-data';
// @ts-ignore
import {words} from '../assets/words';

export const gmail = ():string => {
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
    return "+"+ +rand.worldNumber()+"("+rand.range(0, 999)+")"+cutNumber(rand.range(0, 999), 1000)+"-"+cutNumber(rand.range(0, 99), 1000)+"-"+cutNumber(rand.range(0, 99), 1000);
};

export const street = (words: Array<string>):string => {
    const street = rand.arrayValue(words);
    return street.slice(0, 1).toUpperCase() + street.slice(1) + " street";
};

export const date = () => {
    const date = new Date(rand.range(1821, 2019), rand.range(0, 12), rand.range(0, 29));
    return cutNumber(date.getDate(), 100)+'.'
        +cutNumber(date.getMonth(), 100)+'.'
        +date.getFullYear()
};

export const pasportIndificator = (sex: string, birthday: string, telephone: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let century = 0;
    // eslint-disable-next-line eqeqeq
    if((+birthday.slice(6) > 1800 && +birthday.slice(6) < 1991) && sex == "male"){
        century = 1;
        // eslint-disable-next-line eqeqeq
    } else if((+birthday.slice(6) > 1800 && +birthday.slice(6) < 1991) && sex == "female") {
        century = 2;
        // eslint-disable-next-line eqeqeq
    } else if((+birthday.slice(6) > 1900 && +birthday.slice(6) < 2000) && sex == "female") {
        century = 3;
        // eslint-disable-next-line eqeqeq
    } else if((+birthday.slice(6) > 1900 && +birthday.slice(6) < 2000) && sex == "female") {
        century = 4;
        // eslint-disable-next-line eqeqeq
    } else if(sex == "male") {
        century = 5;
    } else {
        century = 6;
    }
    let iso = 0;
    for(let i = 1; i < 251; ++i) {
        // eslint-disable-next-line eqeqeq
        if(country[i].iso == telephone.slice(1,4))
            iso = country[i].alpha3;
    }
    const amount = cutNumber(rand.range(0, 112),1000);
    return century+reformatDate(birthday)+alphabet[rand.range(0, alphabet.length)]+amount+iso+rand.range(0,9);
};

