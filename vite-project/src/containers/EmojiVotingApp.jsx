import React, { Component } from 'react';
import EmojiList from "../components/EmojiList.jsx";
import VotingResults from "../components/VotingResults.jsx";
import ClearResultsButton from "../components/ClearResultsButton.jsx";



class EmojiVotingApp extends Component {
  constructor() {
    super();
    this.state = {
      emojis: [
        { name: 'smile', imageUrl: '../images/set_smiles/1.jpg', count: 0 },
        { name: 'heart', imageUrl: '../images/set_smiles/2.jpg', count: 0 },
        { name: 'thumbsUp', imageUrl: '../images/set_smiles/3.jpg', count: 0 },
      ],
      winner: null,
    };
  }

  componentDidMount() {
    // Завантаження даних з LocalStorage при завантаженні компоненту
    const storedEmojis = JSON.parse(localStorage.getItem('emojis'));
    if (storedEmojis) {
      this.setState({ emojis: storedEmojis });
    }
  }

  componentDidUpdate() {
    // Збереження даних в LocalStorage при оновленні стану
    localStorage.setItem('emojis', JSON.stringify(this.state.emojis));
  }

  handleVote = (emojiName) => {
    this.setState((prevState) => {
      const updatedEmojis = prevState.emojis.map((emoji) => {
        if (emoji.name === emojiName) {
          return { ...emoji, count: emoji.count + 1 };
        }
        return emoji;
      });

      const maxVotes = Math.max(...updatedEmojis.map((emoji) => emoji.count));
      const winningEmoji = updatedEmojis.find((emoji) => emoji.count === maxVotes);

      return {
        emojis: updatedEmojis,
        winner: winningEmoji,
      };
    });
  };

  handleClearResults = () => {
    this.setState({
      emojis: this.state.emojis.map((emoji) => ({ ...emoji, count: 0 })),
      winner: null,
    });
  };

  render() {
    const { emojis, winner } = this.state;

    return (
        <div>
          <EmojiList emojis={emojis} onVote={this.handleVote} />
          <VotingResults winner={winner} />
          <ClearResultsButton onClearResults={this.handleClearResults} />
        </div>
    );
  }
}

export default EmojiVotingApp;

