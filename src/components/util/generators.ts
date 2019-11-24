// @ts-ignore
import {alphabet} from "../../assets/alphabet";
// @ts-ignore
import {country} from '../../assets/country-data';
// @ts-ignore
import {words} from '../../assets/words';
// @ts-ignore
import {names} from '../../assets/names';
// @ts-ignore
import {surnames} from '../../assets/surnames';
import * as pasport from "./pasport";
import * as rand from './random';
import {dateFormat, reformatDate} from "./time";
import {cutNumber} from "./functionality";

export const gmail = ():string => {
    const start = rand.valueFromArray(words)+'.'+rand.valueFromArray(words);
    const end = "@gmail.com";
    return  rand.range(0, 2) ? start + end : start+'.'+rand.valueFromArray(words)+end;
};

export const telephone = (): string => {
    const prefix = rand.range(12, 75);
    const number = rand.range(1111111, 9999999).toString();
    const iso = rand.worldNumber();
    return `+${iso}(${prefix})${number.slice(0, 3)}-${number.slice(3, 5)}-${number.slice(5, 7)}`;
};

export const street = (): string => {
    const street = rand.valueFromArray(words);
    return street.slice(0, 1).toUpperCase() + street.slice(1) + " street";
};

export const date = (): any => {
    const date = new Date(rand.range(1941, 2003), rand.range(1, 12), rand.range(1, 29));
    return {birthday: dateFormat(date), age: new Date().getFullYear() - date.getFullYear()};
};

export const pasportIndificator = (sex: string, birthday: string, telephone: string): string => {
    const amount = cutNumber(rand.range(0, 112),1000);
    const century = pasport.century(birthday, sex);
    const alpha3 =  pasport.alpha3(country, telephone);
    const date = reformatDate(birthday);
    const city = alphabet[rand.range(0, alphabet.length)];
    const number = rand.range(0,9);
    return century+date+city+amount+alpha3+number;
};

export const content = (): any => {
    const {birthday, age} = date();
    return {
        name: rand.valueFromArray(names),
        surname: rand.valueFromArray(surnames),
        email: gmail(),
        telephone: telephone(),
        street: street(),
        house: rand.range(1, 75),
        sex: rand.range(-1, 1) ? "male" : "female",
        age,
        height: rand.range(150, 210) + "cm",
        weight: rand.range(55, 80) + "kg",
        birthday,
    };
}