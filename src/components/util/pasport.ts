export const century = (birthday: string, sex: string): any => {
    // eslint-disable-next-line eqeqeq
    return +birthday.slice(6) < 2000 ? sex == "female" ? 3 : 4 : sex == "male" ? 5 : 6
};

export const alpha3 = (country: any, telephone: string): string => {
    // @ts-ignore
    // eslint-disable-next-line eqeqeq
    return country[Object.keys(country)
    // @ts-ignore
    // eslint-disable-next-line eqeqeq
        .find(ind => +country[ind].iso == telephone
            .split("(")[0]
            .slice(1))].alpha3
};