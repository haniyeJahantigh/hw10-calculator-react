import React from 'react'

const Keypad = ({handleClick , clear,backspace,calculate}) => {
    return (
       
            <div className="button">
                <button name="CE" onClick={clear} id="clear"  className="colorebtn">Clear</button>
                <button name="C" onClick={()=>backspace} id="backspace" className="colorebtn">C</button>
                <button name="/" onClick={(e)=>handleClick()} className="colorebtn">&divide;</button><br/>

                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={()=>handleClick}>8</button>
                <button name="9" onClick={()=>handleClick}>9</button>
                <button name="*" onClick={()=>handleClick} className="colorebtn">&times;</button><br/>

                <button name="4" onClick={()=>handleClick}>4</button>
                <button name="5" onClick={()=>handleClick}>5</button>
                <button name="6" onClick={()=>handleClick}>6</button>
                <button name="-" onClick={()=>handleClick} className="colorebtn">&ndash;</button><br/>

                <button name="1" onClick={()=>handleClick}>1</button>
                <button name="2" onClick={()=>handleClick}>2</button>
                <button name="3" onClick={()=>handleClick}>3</button>
                {/* <button name="+" onClick={()=>onClick} className="colorebtn">+</button>

                <button name="0" onClick={()=>onClick}>0</button>
                <button name="." onClick={()=>onClick}>.</button>
                <button name="=" onClick={()=>calculate} id="equal" className="colorebtn">=</button> */}
            </div>
       
    )
}
export default Keypad;