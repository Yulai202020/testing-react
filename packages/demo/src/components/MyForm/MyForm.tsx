import React, { useState } from 'react';
import styles from './MyForm.module.scss';

function MyForm() {
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
        <div className={styles.wrapped}>
            <div className={styles.form_container}>
                <div className="div_margin">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="input" className={styles.label}>Input your name</label>
                        <input
                            className={styles.input}
                            aria-label="input"
                            id="input"
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                        />
                        <button type="submit" className={styles.submit_button}>Submit</button>
                    </form>

                    {isSubmitted && inputValue !== "" && (
                        <p className={styles.text}>Hello {inputValue}!</p>
                    )}

                    <a href="/">Home</a>
                </div>
            </div>
        </div>
    );
}

export default MyForm;
