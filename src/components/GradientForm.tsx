import { useState } from "react";
import style from "./GradientForm.module.css";

function GradientForm() {
    const [inputValue, setInputValue] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you might handle form submission logic, e.g., validation or API call
    };

    return (
        <div className={style.container}>
            <form onSubmit={onSubmit} className={style.gradient_form}>
                <input
                    className={style.line_input}
                    aria-label="Username"
                    id="username"
                    type="text"
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                    placeholder="Enter username"
                />
                <input
                    className={style.line_input}
                    aria-label="Password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
                <button className={style.gradient_button} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default GradientForm;
