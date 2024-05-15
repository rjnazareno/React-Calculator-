import React, { useState } from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState('');

    const handleButtonClick = (buttonValue) => {
        if (value === '0' && buttonValue !== '.') {
       
            setValue(buttonValue);
        } else if (buttonValue === 'CLR') {

            setValue('');
        } else if (buttonValue === 'EQ') {
            
            try {
                const result = eval(value);
                setValue(result.toString());
            } catch (error) {
                setValue('Error');
            }
        } else {
           
            setValue(value + buttonValue);
        }
    };

    return ( 
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div className="display">
                        <input type="text" value={value} readOnly />
                    </div>
                    <div>
                
                    </div>
                    <div>
                        <input type="button" value="7" onClick={() => handleButtonClick('7')} />
                        <input type="button" value="8" onClick={() => handleButtonClick('8')} />
                        <input type="button" value="9" onClick={() => handleButtonClick('9')} />
                        <input type="button" value="MUL" onClick={() => handleButtonClick(' * ')} />
                    </div>
                    <div>
                        <input type="button" value="4" onClick={() => handleButtonClick('4')} />
                        <input type="button" value="5" onClick={() => handleButtonClick('5')} />
                        <input type="button" value="6" onClick={() => handleButtonClick('6')} />
                        <input type="button" value="SUB" onClick={() => handleButtonClick(' - ')} />
                    </div>
                    <div>
                        <input type="button" value="1" onClick={() => handleButtonClick('1')} />
                        <input type="button" value="2" onClick={() => handleButtonClick('2')} />
                        <input type="button" value="3" onClick={() => handleButtonClick('3')} />
                        <input type="button" value="ADD" onClick={() => handleButtonClick(' + ')} />
                    </div>
                    <div>
                        <input type="button" value="CLR" onClick={() => handleButtonClick('CLR')} />
                        <input type="button" value="0" onClick={() => handleButtonClick('0')} />
                        <input type="button" value="DIV" onClick={() => handleButtonClick(' / ')} />
                        <input type="button" value="EQ" className='EQ' onClick={() => handleButtonClick('EQ')} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
