import React, { Component } from "react";

function Message(props) {
    return (
        <li>
            <div>
                {props.sender}
                <br/>
                {props.message}
            </div>
        </li>
    );
}


class MessageList extends Component {
    render () {
        let bulletedMsg = this.props.messages.map((e, i) => {
            return (<Message message={e[0]} sender={e[1]} />);
        });

        return (
                <ul>{bulletedMsg}</ul>
        );
    }
}

export default MessageList;
