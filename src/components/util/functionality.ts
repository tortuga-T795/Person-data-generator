export const copy = ():void => {
    document.execCommand("copy");
    alert("JSON скопирован");
};

export const cutNumber = (value: number, side: number):string => {
    return (side + value).toString().slice(1);
};