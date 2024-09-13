import { useState } from "react";

import animation_style from "./AnimatedForm.module.scss";
import form_style from "./AnimatedForm.module.css";

function AnimatedForm() {
    const [inputValue, setInputValue] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className={animation_style.main}>
            <div className={animation_style.box}>
                <form onSubmit={onSubmit} className={form_style.animated_form}>
                    <input
                        className={form_style.line_input}
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
                        className={form_style.line_input}
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