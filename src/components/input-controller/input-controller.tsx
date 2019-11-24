import React, { Component } from 'react';
import './input-controller.css';

interface IControll {
    text: string
}

class InputControll extends Component {

    inputRef: any = null;

    state: IControll = {
        text: ""
    };

    onInputChanger = () => {
        const number = this.inputRef.value.split('');
        // eslint-disable-next-line eqeqeq
      if(number.some((el: any) => !/[0-9]/.test(el)))  {
          this.inputRef.value = number.filter((el: any) => /[1-9]/.test(el)).join('');
      } else {
          this.setState({text: this.inputRef.value});
          // @ts-ignore
          this.props.onChangeAmount(+this.inputRef.value);
      }
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <span>
                <input type='text'
                       className='ui'
                       placeholder={'default: 0'}
                       onChange={this.onInputChanger}
                       ref={input => this.inputRef = input}/>
            </span>
        )
    }
}

export default InputControll;