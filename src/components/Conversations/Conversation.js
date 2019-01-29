import React, {Component} from 'react';
import {Menu, Avatar} from 'antd';
import qoobee from "../../images/qoobee.jpg";
import '../../css/Conversations/conversation.css';


class Conversation extends Component {
    render() {
        return (
            <Menu.Item key={this.props.key} style={{height:'70px',marginTop:'0' }} >
                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                <p className="nav-text">QooBee</p>
                <p className="preview">nà nínà nínà nínà nínà nínà nínà ní</p>
                <div className="dot"></div>
            </Menu.Item>
        );
    }
}

export default Conversation;