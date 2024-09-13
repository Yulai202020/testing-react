import { useState } from "react";

import styles_scss from "./AnimatedForm.module.scss";
import styles_css from "./AnimatedForm.module.css";

function AnimatedForm() {
    const [inputValue, setInputValue] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className={styles_scss.main}>
            <div className={styles_scss.box}>
                <form onSubmit={onSubmit} className={styles_css.animated_form}>
                    <input
                        className={styles_css.line_input}
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
                        className={styles_css.line_input}
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