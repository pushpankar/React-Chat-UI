import React, { Component } from 'react';
import logo from './logo.svg';
import TextInput from './text-inp';
import MessageList from "./messageList";
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
                <MessageList messages={this.state.messages}></MessageList>
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
