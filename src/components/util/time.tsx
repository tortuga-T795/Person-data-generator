export const toTimeNumber = (value: number, side: number):string => {
    return (side + value).toString().slice(1);
};

export const reformatDate = (date: string):string => {
    return date.slice(0,2)+date.slice(3,5)+date.slice(8,10);
};