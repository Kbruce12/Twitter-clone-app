import React from "react";

const Tweet = ({text, date, author}) => {
    // const text = props.text;
    // const author = props.author;
    // const date = props.date;
    return (
        <div>
            <h3>{text}</h3>
            <p>{author}</p>
            <p>{date}</p>
        </div>
    )
};

export default Tweet;