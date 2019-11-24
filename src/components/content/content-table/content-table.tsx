import React, {Component} from 'react';
import './content-data.css';
import contentPart from "../content-part/content-part";

class ContentTable extends Component{

    shouldComponentUpdate(nextProps: any) {
        // @ts-ignore
        return nextProps.change !== this.props.change
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        const {amount} = this.props;
        return (
            <div className='force-select-all'>
                <span className={'scroll'}>
                    <div>persons: {'{'}</div>
                    {[...Array(amount)].map((el, ind, arr) => ind !== arr.length - 1 ? <div key={ind}>{contentPart(ind)},</div> : <div key={ind}>{contentPart(ind)}</div>)}
                    <div>{'}'}</div>
                </span>
            </div>
        )
    }

}

export default ContentTable;
