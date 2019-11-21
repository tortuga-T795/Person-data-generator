export const toTimeNumber = (value: number):string => {
    return (100 + value).toString().slice(1);
};

export const reformatDate = (date: string):string => {
    return date.slice(0,2)+date.slice(3,5)+date.slice(8,10);
};