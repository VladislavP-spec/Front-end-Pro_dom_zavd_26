// Emoji.js
import React from 'react';

class Emoji extends React.Component {
    render() {
        const { index, vote, votes, showResults } = this.props;
        const emojiPath = `./src/images/${index + 1}.jpg`;

        return (
            <div className="emoji-container">
                <img
                    className="emoji"
                    src={emojiPath}
                    alt={`emoji${index + 1}`}
                    title={showResults ? `Голосів: ${votes[index]}` : ''}
                    onClick={() => vote(index)}
                />
                {showResults && <div>Голосів: {votes[index]}</div>}
            </div>
        );
    }
}

export default Emoji;
