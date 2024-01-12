import React, {Component} from "react";

export default class EmojiList extends Component {
    render() {
        const { emojis, onVote } = this.props;

        return (
            <div>
                <h2>Голосування за найкращий смайлик</h2>
                <div>
                    {emojis.map((emoji) => (
                        <div key={emoji.name}>
                            <img src={emoji.imageUrl} alt={emoji.name} />
                            <button onClick={() => onVote(emoji.name)}>Vote</button>
                            <span>Count: {emoji.count}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}