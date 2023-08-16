import { useState } from "react";

const ChangeBackgroud = () => {
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    const [background,setbackground] = useState('orange');

    const handlebackground = () => {
        setbackground('#' + randomNumber);
    };
    return (
        <div style={{paddingLeft: '20px',background: background,color: 'white'}}>
            <h1>Change Backgroud background</h1>
            <button onClick={handlebackground}>background: {background}</button>
        </div>
    )
}
export default ChangeBackgroud;