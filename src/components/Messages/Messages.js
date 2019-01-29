import React, { Component } from 'react';
import {Layout} from "antd";
import Message from "../Messages/Message";

const messageStyle = {
    height: '100vh', position: 'fixed', left: '30%',width:'70%',
    backgroundColor: '#b3c4ff'
}
class Messages extends Component {
    render() {
        return (
            <Layout style={messageStyle}>
                <Message />
            </Layout>
        );
    }
}
export default Messages;