// @ts-ignore
import {country} from '../assets/country-data';

export const arrayValue = (list: Array<string>):string => {
    const number = Math.floor(Math.random() * Math.floor(list.length));
    return list[number];
};

export const worldNumber = ():string => {
    return country[range(1, 250)].iso
};

export const range = (min: number, max: number):number => {
    return Math.floor(Math.random() * (max - min) + min);
};
