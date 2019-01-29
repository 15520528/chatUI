import React, { Component } from 'react';
import qoobee from "../../images/qoobee.jpg";
import {Layout, Menu} from 'antd'
import {Avatar} from "antd";

class Contacts extends Component {
    render() {
        return (
            <Layout style={{
                height: '100%',width:'100%',backgroundColor:'red', display:this.props.contactDisplay, overflow: 'auto'
            }}
            >
            <div style={{overflow: 'auto', }} id="contacts">

                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >
                    <Menu.Item key="1" style={{height:'70px',marginTop:'0' }} >
                        <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2" style={{height:'70px', marginTop:'0'}}>
                        <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="3" style={{height:'70px', marginTop:'0'}}>
                        <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="4" style={{height:'70px', marginTop:'0'}}>
                        <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="5" style={{height:'70px', marginTop:'0'}}>
                        <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="6" style={{height:'70px', marginTop:'0'}}>
                        <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="7" style={{height:'70px', marginTop:'0'}}>
                        <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="8" style={{height:'70px', marginTop:'0'}}>
                        <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="8" style={{height:'70px', marginTop:'0'}}>
                        <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="8" style={{height:'70px', marginTop:'0'}}>
                        <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="8" style={{height:'70px', marginTop:'0'}}>
                        <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                </Menu>
            </div>
            </Layout>
        );
    }
}
export default Contacts;