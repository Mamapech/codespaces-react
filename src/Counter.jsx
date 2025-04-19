import React, { useState } from "react";
const Counter = () => {   
    const[count,setCount] = useState(0);
    const[value,setValue] = useState("type here!");
    const onTextChange=(event)=>{
        setValue(event.target.value);
    }
return(
        <>
        < button onClick={() => setCount(count+1)}>
            Plus
        </button>
        < button onClick={() => setCount(0)}>
           Reset
        </button>
        < button onClick={() => setCount(count-1)}>
           Minus
        </button>
        <p>You clicked {count} times</p>
        <h10>You typed {value.length} characters</h10><br/><br/>
        <input type= "text" value={value} onChange={event => onTextChange(event)} />
        < button onClick={() => setValue("")}>
           Reset
        </button><br/>
        <h4>{parseFloat(value)}$ to {value*33.35.toFixed(2)} baht</h4>
        </>
    );
}
export default Counter;