import React, {Component} from "react";
export default class VotingResults extends Component {
    render() {
        const { winner } = this.props;

        return (
            <div>
                <h3>Результати голосування:</h3>
                {winner && (
                    <div>
                        <h4>Переможець:</h4>
                        <img src={winner.imageUrl} alt={winner.name} />
                        <p>Кількість голосів: {winner.count}</p>
                    </div>
                )}
            </div>
        );
    }
}
