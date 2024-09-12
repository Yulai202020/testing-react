import "./AnimatedBorder.scss";
import "./AnimatedBorder_content.css";
import { useState } from "react";

function AnimatedBorder() {
    const [inputValue, setInputValue] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="main">
            <div className="box">
                <div className="div-margin">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="input">Enter username</label>
                        <input
                            aria-label="input"
                            id="input"
                            type="text"
                            value={inputValue}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                            readOnly
                        />

                        <label htmlFor="input">Enter password</label>
                        <input
                            aria-label="input"
                            id="input"
                            type="password"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AnimatedBorder;