import React, { Component } from 'react';
export default class ClearResultsButton extends Component {
    render() {
        const { onClearResults } = this.props;

        return (
            <button onClick={onClearResults}>Clear Results</button>
        );
    }
}
