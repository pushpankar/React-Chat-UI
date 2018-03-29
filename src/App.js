import React, { Component } from 'react';
import logo from './logo.svg';
import TextInput from './text-inp';
import './App.css';

class App extends Component {
    constructor () {
        super();
        this.state = {
            messages: []
        };
    }

    render() {
        return (
            <div>
                <TextInput click={(text) => this.sendFunc(text)}/>
            </div>
        );
    }
    sendFunc = (text) => {
        let messagesCopy = this.state.messages.slice();
        const msg = [text, "you"];
        messagesCopy.push(msg);
        this.setState({messages: messagesCopy});
    }
}

export default App;
