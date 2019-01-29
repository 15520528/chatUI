import React, {Component} from 'react';
import {Layout, Menu, Icon, Avatar} from 'antd';
import { Popover, Button } from 'antd';
import Conversations from '../Conversations/Conversations';
import Contacts from '../Contacts/Contacts';
import HeaderRightSide from './headerRightSide';
import 'antd/dist/antd.css';
import 'antd/dist/antd.min';

import qoobee from '../../images/qoobee.jpg';
import connect from "react-redux/es/connect/connect";
import {UserActions} from "../../Redux/Actions/UserActions";


const leftStyle = {
    overflow: 'hidden', height: '100vh', position: 'fixed', left: 0, width: '80px', background: '#BDFFF3',
};
const rightStyle = {
    height: '100vh', marginLeft: '79px', width:'80%',
};

const sideStyle = {
    height: '100vh',  left: '0%',width:'30%', backgroundColor: 'red',
}


class Side extends Component {
    constructor() {
        super();
        this.state = {
            contactDisplay: 'none',
            conversationDisplay: 'block',
            setting:(
                <div>
                    <Menu>
                        <Menu.Item key="1">Giới thiệu</Menu.Item>
                        <Menu.Item key="2" onClick={this.logout}>Đăng xuất</Menu.Item>
                    </Menu>
                </div>
            )
        }
    }

    showContacts = () => {
        this.setState({contactDisplay: 'block'});
        this.setState({conversationDisplay: 'none'});
    }

    showConversations = () => {
        this.setState({contactDisplay: 'none'});
        this.setState({conversationDisplay: 'block'});
    }


    logout=()=>{
        this.props.logout();
    }

    render() {
        const username = JSON.parse(localStorage.getItem('user')).userName;
        return (
            <Layout style={sideStyle} >
                <Layout style={leftStyle}>

                    <header style={{height:'70px',marginTop:'0',padding:'10px' }} >
                        <Avatar size={60} src={qoobee} />
                        <p>{username}</p>
                    </header>

                    <Menu inlineCollapsed={true} mode="inline" defaultSelectedKeys={['1']} style={{
                        height: '100%',
                        backgroundColor: '#BDFFF3', marginTop: '50%'
                    }}>
                        <Menu.Item key="1"  onClick={this.showConversations} >
                            <Icon type="mail" style={{ fontSize: '20px'}}/>
                            <span>Tin nhắn</span>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={this.showContacts}>
                            <Icon type="team" style={{ fontSize: '20px'}}/>
                            <span>Danh bạ</span>
                        </Menu.Item>
                    </Menu>
                    <Popover placement="rightBottom" title="Quản lý" content={this.state.setting} trigger="click">
                        <Button><Icon type="setting"/></Button>
                    </Popover>

                </Layout>

                <Layout style={rightStyle}
                >
                        <HeaderRightSide/>
                        <Conversations conversationDisplay={this.state.conversationDisplay}/>
                        <Contacts contactDisplay={this.state.contactDisplay}/>

                </Layout>
            </Layout>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log(state.userReducer.username)
    return {

    }
}
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(UserActions.logout()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Side);