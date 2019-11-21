// @ts-ignore
import {country} from '../assets/country-data';

export const arrayValue = (list: Array<string>):string => {
    const number = Math.floor(Math.random() * Math.floor(list.length));
    return list[number];
};

export const worldNumber = ():string => {
    let result = undefined;
    while (result === undefined) {
        let numb = Math.floor(Math.random() * Math.floor(250));
        // eslint-disable-next-line eqeqeq
        result = country[Object.keys(country).find(el => +el == numb)].iso;
    }
    return result;
};

export const range = (min: number, max: number):number =>{
    return Math.floor(Math.random() * (max - min) + min);
};
