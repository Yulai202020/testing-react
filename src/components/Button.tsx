import { useState } from "react";

function Button() {
    const [isWasPressed, setIsWasPressed] = useState(false);

    function onClick() {
        setIsWasPressed(prevState => !prevState);
    }

    return (
        <>
            <button onClick={onClick}>Click me</button>
            {isWasPressed && (
                <p>Hello</p>
            )}
        </>
    );
}

export default Button;
