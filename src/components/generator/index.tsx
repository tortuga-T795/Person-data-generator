import React, { Component } from 'react';
// @ts-ignore
import {names} from '../assets/names';
// @ts-ignore
import {surnames} from '../assets/surnames';
// @ts-ignore
import {words} from '../assets/words';

import * as rand from '../random';
import * as gen from '../generators';

interface IGenerator {
    name: string,
    surname: string,
    email: string,
    telephone: string,
    street: string,
    house: number,
    sex: string,
    age: number,
    height: string,
    weight: string,
    birthday: string
}

class Generator extends Component {
    state: IGenerator = {
        name: rand.arrayValue(names),
        surname: rand.arrayValue(surnames),
        email: gen.gmail(words),
        telephone: gen.telephone(),
        street: gen.street(words),
        house: rand.range(1, 75),
        sex: rand.range(-1, 1) ? "male": "female",
        age: rand.range(1, 99),
        height: rand.range(140, 210) + "cm",
        weight: rand.range(50, 110) + "kg",
        birthday: gen.date(),
    };

    generatePasportInd = ():string => {
      return gen.pasportIndificator(this.state.sex, this.state.birthday, this.state.telephone, "TT")  ;
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <div>Name: {this.state.name}</div>
                <div>Surname: {this.state.surname}</div>
                <div>Email: {this.state.email}</div>
                <div>Telephone: {this.state.telephone}</div>
                <div>Street: {this.state.street}</div>
                <div>House: {this.state.house}</div>
                <div>Sex: {this.state.sex}</div>
                <div>Age: {this.state.age}</div>
                <div>Height: {this.state.height}</div>
                <div>Weight: {this.state.weight}</div>
                <div>Passport number: {this.generatePasportInd()}</div>
                <div>Birthday: {this.state.birthday}</div>
            </div>
        );
    }
}

export default Generator;