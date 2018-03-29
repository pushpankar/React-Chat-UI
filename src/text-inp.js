import React, { Component } from 'react';

class TextInput extends Component {
    constructor () {
        super();
        this.state = {
            text: ""
        };
    }

    onInput = e => {
        this.setState({text: e.target.value});
    }

    sendMsg = () => {
        this.props.click(this.state.text);
        this.setState({text: ""});
    }

    render () {
        return (
                <div>
                <input placeholder="Type a message" value={this.state.text}
                       onChange={this.onInput}/>
                <button onClick={this.sendMsg}>Send</button>
                </div>
        );
    }
}

export default TextInput;
