import React, { useState } from 'react';
import './MyForm.css';
import "./links.css";

function MyForm() {
    const [inputValue, setInputValue] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setIsSubmitted(true);
    }

    return (
        <div className='wrapped'>
            <div className="form-container">
                <div className='div-margin'>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="input">Input your name</label>
                        <input
                            aria-label="input"
                            id="input"
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                        />
                        <button type="submit">Submit</button>
                    </form>

                    {isSubmitted && (
                        <p className="value-display">Hello {inputValue}!</p>
                    )}

                    <a href="/">Home</a>
                </div>
            </div>
        </div>
    );
}

export default MyForm;
