'use client'

import './ScrollUp.css';

const scrollUp:any = () => {
    document.documentElement.scrollTop = 0;
}

function ScrollUp(): JSX.Element {
    return(
        <button className="button fixedbutton" onClick={scrollUp}>Up</button>
    )
};

export default ScrollUp;