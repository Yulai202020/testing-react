import React, { useState } from 'react';
import style from "./style.module.css";

function NewForm() {
    const [inputValue, setInputValue] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const to_set = e.target.value;

        if (to_set === "") {
            setIsSubmitted(false);
        }

        setInputValue(to_set);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return (
        <div className={style.container}>
            <div className="div_margin">
                <form className={style.myform} onSubmit={onSubmit}>
                    <label htmlFor="input">Input your name</label>
                    <input
                        aria-label="input"
                        id="input"
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>

                    {isSubmitted && inputValue !== "" && (
                        <p className={style.text}>Hello {inputValue}!</p>
                    )}

                    <a href="/">Home</a>
                </form>
            </div>
        </div>
    );
}

export default NewForm;