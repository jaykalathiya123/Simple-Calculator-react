import React, { useState } from "react";
import '../celc-body/celc.css';

const Celc = () => {
  
    const [value, setValue] = useState("");


    const handleClick = (value) => {
        setValue(prevValue => prevValue + value);
    };

    const handleClear = () => {
        setValue("");
    };

 
    const handleEqual = () => {
        try {
  
            const result = eval(value); 
            setValue(result.toString());
        } catch (error) {
            setValue("Error");
        }
    };

    return (
        <div>
            <h1>Ract  Calculator</h1>
                <div className="input" id="input">{value}</div>
                <div className="buttons">
                    <div className="operators">
                        <button onClick={() => handleClick('+')}>+</button>
                        <button onClick={() => handleClick('-')}>-</button>
                        <button onClick={() => handleClick('*')}>*</button>
                        <button onClick={() => handleClick('/')}>/</button>
                    </div>
                    <div className="leftPanel">
                        <div className="numbers">
                            <button onClick={() => handleClick('7')}>7</button>
                            <button onClick={() => handleClick('8')}>8</button>
                            <button onClick={() => handleClick('9')}>9</button>
                        </div>
                        <div className="numbers">
                            <button onClick={() => handleClick('4')}>4</button>
                            <button onClick={() => handleClick('5')}>5</button>
                            <button onClick={() => handleClick('6')}>6</button>
                        </div>
                        <div className="numbers">
                            <button onClick={() => handleClick('1')}>1</button>
                            <button onClick={() => handleClick('2')}>2</button>
                            <button onClick={() => handleClick('3')}>3</button>
                        </div>
                        <div className="numbers">
                            <button onClick={() => handleClick('0')}>0</button>
                            <button onClick={() => handleClick('.')}>.</button>
                            <button id="clear" onClick={handleClear}>C</button>
                        </div>
                    </div>
                    <button className="equal" id="result" onClick={handleEqual}>=</button>
                </div>
            
        </div>
    );
};

export default Celc;
