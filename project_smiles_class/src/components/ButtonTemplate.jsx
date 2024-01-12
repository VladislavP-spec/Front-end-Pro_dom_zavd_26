// ButtonTemplate.js
import React from 'react';

class ButtonTemplate extends React.Component {
    render() {
        const { buttonText, onClick, disabled } = this.props;

        return (
            <button onClick={onClick} disabled={disabled}>
                {buttonText}
            </button>
        );
    }
}

export default ButtonTemplate;
