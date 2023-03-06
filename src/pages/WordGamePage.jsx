import React, { useState } from "react";
import "../App.css";
import wordService from "../services/WordService";

function WordGamePage() {
    const [word, setWord] = useState("");
    const [score, setScore] = useState(0);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!word) {
            setError("Please enter a word!");
            setScore(0);
            return;
        }

        const { score, error } = await wordService.submitWord(word);

        setScore(score);
        setError(error);
    };

    return (
        <div >
            <div>
                <div className="title">
                    <h1>Word Game</h1>
                </div>
                <div className="word-form-wrapper">
                    <form onSubmit={handleSubmit} className="word-form">
                        <label htmlFor="">Enter your word</label>
                        <input
                            type="text"
                            label="Enter your word"
                            value={word}
                            onChange={(event) => setWord(event.target.value)}
                        />
                        <button
                            type="submit"
                        >
                            Submit
                        </button>
                        <div className="messages">
                            {error && <div className="error-message">{error}</div>}
                            {!error && score > 0 && (
                                <div className="score">
                                    The word "{word}" scored {score} points.
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default WordGamePage;
