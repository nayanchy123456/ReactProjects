import { useEffect, useRef, useState } from "react";

function MyComponents() {

    const ref = useRef(0);
    useEffect(() => {
        console.log("Renders everytime")
    })

    function handleCount() {
        ref.current = ref.current + 1;
        console.log(ref.current);
    }
    return (
        <>
            <button onClick={handleCount}> click me !!</button>
        </>
    );
}

export default MyComponents