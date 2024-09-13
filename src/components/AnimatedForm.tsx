import { useState } from "react";

import "./AnimatedForm.scss";
import "./AnimatedForm.css";

function AnimatedForm() {
    const [inputValue, setInputValue] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="main">
            <div className="box">
                <form onSubmit={onSubmit} className="animated-form">
                    <input
                        className="line-input"
                        aria-label="input"
                        id="input"
                        type="text"
                        value={inputValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}

                        // using react
                        // onMouseEnter={(e: React.MouseEvent<HTMLInputElement>) => {e.currentTarget.setAttribute("readonly", "true")}}
                        // onMouseLeave={(e: React.MouseEvent<HTMLInputElement>) => {e.currentTarget.removeAttribute("readonly")}}

                        placeholder="Enter username"
                    />

                    <input
                        className="line-input"
                        aria-label="input"
                        id="input"
                        type="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AnimatedForm;