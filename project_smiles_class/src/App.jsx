// App.js
import React, { Component } from 'react';
import Emoji from './components/Emoji.jsx';
import ButtonTemplate from './components/ButtonTemplate.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: JSON.parse(localStorage.getItem('votes')) || Array(5).fill(0),
            showResults: false,
            winnerIndex: null,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.showResults !== this.state.showResults) {
            this.calculateWinner();
        }
        localStorage.setItem('votes', JSON.stringify(this.state.votes));
    }

    vote = (index) => {
        const newVotes = [...this.state.votes];
        newVotes[index]++;
        this.setState({ votes: newVotes });
    };

    showResults = () => {
        this.setState({ showResults: true });
    };

    clearResults = () => {
        localStorage.removeItem('votes');
        this.setState({
            votes: Array(5).fill(0),
            showResults: false,
            winnerIndex: null,
        });
    };

    calculateWinner = () => {
        const { votes } = this.state;
        const maxVotesIndex = votes.indexOf(Math.max(...votes));
        this.setState({ winnerIndex: maxVotesIndex });
    };

    render() {
        const { votes, showResults, winnerIndex } = this.state;
        const totalVotes = votes.reduce((sum, count) => sum + count, 0);
        const isResultsButtonVisible = totalVotes > 0;

        return (
            <div>
                <h1>Голосування за смайли</h1>
                <div id="emoji-list">
                    {votes.map((_, index) => (
                        <Emoji
                            key={index}
                            index={index}
                            vote={this.vote}
                            votes={votes}
                            showResults={showResults}
                        />
                    ))}
                </div>
                <ButtonTemplate
                    buttonText="Показати результати"
                    onClick={this.showResults}
                    disabled={!isResultsButtonVisible}
                />
                <ButtonTemplate
                    buttonText="Очистити результати"
                    onClick={this.clearResults}
                />
                {showResults && (
                    <>
                        <h2>Результати голосування:</h2>
                        <h3>Переможець:</h3>
                        {winnerIndex !== null && (
                            <>
                                <img
                                    className="emoji"
                                    src={`./src/images/${winnerIndex + 1}.jpg`}
                                    alt={`emoji${winnerIndex + 1}`}
                                />
                                <p>Голосів: {votes[winnerIndex]}</p>
                            </>
                        )}
                    </>
                )}
            </div>
        );
    }
}

export default App;
