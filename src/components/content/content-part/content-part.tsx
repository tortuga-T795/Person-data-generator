import React from 'react';
import * as gen from '../../util/generators';
import './content-part.css';

const contentPart = (ind: number): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined => {
    const content = gen.content();
    return(
        <>
            <div>&#160;&#160;&#160;&#160;{ind}: {'{'}</div>
            <span className='d-flex'> <div>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Name:&#160;{content.name}&#160;,</div></span>
            <div className='d-flex'> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Surname:&#160;{content.surname}&#160;,</div>
            <div className='d-flex'> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Sex:&#160;{content.sex}&#160;,</div>
            <div className='d-flex'> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Age:&#160;{content.age}&#160;,</div>
            <div className='d-flex'> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Email:&#160;{content.email}&#160;,</div>
            <div className='d-flex'> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Telephone:&#160;{content.telephone}&#160;,</div>
            <div className='d-flex'> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Street:&#160;{content.street}&#160;,</div>
            <div className='d-flex'> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;House:&#160;{content.house}&#160;,</div>
            <div/>
            <div className='d-flex'> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Height:&#160;{content.height}&#160;,</div>
            <div className='d-flex'> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Weight:&#160;{content.weight}&#160;,</div>
            <div className='d-flex'> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Birthday:&#160;{content.birthday}&#160;,</div>
            <div className='d-flex'> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Passport number:&#160;{gen.pasportIndificator(content.sex, content.birthday, content.telephone)}</div>
            <>&#160;&#160;&#160;&#160;{'}'}</>
        </>
    )
};

export default contentPart;
