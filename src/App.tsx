import React, {Component} from 'react';
import './App.css';
import Generator from './components/generator/generator'
//@ts-ignore
import {connect} from 'react-redux';

class App extends Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className='body'>
                <Generator/>
            </div>
        );
    }
}

export default connect(

)(App);
