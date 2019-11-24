import React, { Component } from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import './generator.css';
import ContentTable from "../content/content-table/content-table";
import {copy} from "../util/functionality";
import InputControll from "../input-controller/input-controller";

interface IGenerator {
    visible: boolean,
    change: boolean,
    amount: number
}

class Generator extends Component {

    state: IGenerator = {
        visible: false,
        change: false,
        amount: 0
    };

    onGenerateHandler = ():void => {
        this.setState((prevState) => {
            // @ts-ignore
            return {visible: true, change: !prevState.change}
        })
    };

    onInputChanger = (amount: number):void => {
        this.setState({amount})
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        const content = this.state.visible ? <ContentTable amount={this.state.amount}  change={this.state.change}/> : null;
        // @ts-ignore
        const input = <InputControll onChangeAmount={this.onInputChanger}/>;
        return(
            <div className='body'>
                <div className='content '>
                    <div className='content-data' onClick={copy}>
                        {content}
                    </div>
                </div>
                <button className='ui' onClick={this.onGenerateHandler} disabled={this.state.amount < 0 || this.state.amount > 200  }>GENERATE</button>
                {input}
            </div>
        );
    }
}

export default connect()(Generator);