import { useState } from "react";

function Button() {
    const [isWasPressed, setIsWasPressed] = useState(false);

    function onClick() {
        setIsWasPressed(prevState => !prevState);
    }

    return (
        <div className="div-margin">
            <button onClick={onClick}>Click me</button>
            {isWasPressed && (
                <p>Hello</p>
            )}
            <a href="/">Home</a>
        </div>
    );
}

export default Button;
