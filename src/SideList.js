import React, { Component } from 'react';

class SideList extends Component {
    render () {
        let items = this.props.item.map((e, i) => {
            return (
                    <li>{e}</li>
            );
        });
        return (<ul>{items}</ul>);
    }
}

export default SideList;
