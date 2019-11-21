import React, {Component} from 'react';
import './App.css';
import Generator from './components/generator'


class App extends Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <Generator/>
            </div>
        );
    }
}

export default App;
