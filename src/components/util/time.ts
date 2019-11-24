import {cutNumber} from "./functionality";

export const reformatDate = (date: string):string => {
    return date.slice(0,2)+date.slice(3,5)+date.slice(8,10);
};

export const dateFormat = (date: any):string => {
    return cutNumber(date.getDate(), 100)+'.'
        +cutNumber(date.getMonth(), 100)+'.'
        +date.getFullYear();
};

