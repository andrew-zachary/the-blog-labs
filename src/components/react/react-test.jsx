import { useState } from "react";

export default () => {
    const [counter, setCounter] = useState(0);
    return <>
        <h1 className="text-6xl text-center">{counter}</h1>
        <button className="text-4xl text-white mt-12 p-4 bg-black" onClick={()=>setCounter((value) => value+1)}>counter</button>
    </>
};