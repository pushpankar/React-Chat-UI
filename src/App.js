import React, { Component } from 'react';
import logo from './logo.svg';
import TextInput from './text-inp';
import MessageList from "./messageList";
import SideList from "./SideList";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor () {
        super();
        this.state = {
            messages: [],
            titles: ["Abc", "Def", "Ghi"]
        };
    }

    render() {
        return (
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <SideList  item={this.state.titles}/>
                        </div>
                        <div class="col-sm-8">
                            <MessageList messages={this.state.messages}></MessageList>
                            <TextInput click={(text) => this.sendFunc(text)}/>
                        </div>
                    </div>

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
