import React from "react";
import { useState } from "react";

const quotes = [
    {quote: "The only limit to our realization of tomorrow will be our doubts of today." , author: "Unknown"},
    {quote: "Be the change that you wish to see in the world." , author: "Mahatma Gandhi"},
    {quote: "You miss 100% of the shots you never take." , author: "Wayne Gretzky"},
    {quote: "It's never too late to be what you might have been." , author: "Unknwon"},
    {quote: "The most common way people give up their power is by thinking they don't have any." , author: "Alice Walker"},
    {quote: "Don't judge each day by the harvest you reap but by the seeds that you plant." , author: "Robert Louis Stevenson"},
    {quote: "The only way to do great work is to love what you do." , author: "Steve Jobs"},
    {quote: "The future belongs to those who believe in the beauty of their dreams." , author: "Eleanor Roosevelt"},
    {quote: "Do one thing every day that scares you." , author: "Eleanor Roosevelt"},
    ];

const QuoteGenerator = () => {
    const [quote, setQuote] = useState(quotes[0]);

    const getNewQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return(
        <div className="quote-generator">
            <p>"{quote.quote}"</p>
            <p>- {quote.author}</p>
            <button onClick={() => getNewQuote()}>New quote!</button>
        </div>
    );
}

export default QuoteGenerator;