import React, { Component } from 'react';
import {Layout, Menu, Avatar} from 'antd';
import qoobee from "../../images/qoobee.jpg";
import '../../css/Conversations/conversation.css';
import {ChatActions} from "../../Redux/Actions/ChatActions";
import { connect } from 'react-redux';

class Conversations extends Component{
    constructor(props) {
        super(props);
        this.state = {
            conversationsMap:[]
        }
    }

    showMessage=(chat)=>{
        // alert(chat.key);
      this.props.FetchChatId(chat.key);
    };

    showConversations(){
        const menuItems = this.state.conversationsMap.map((item)=>
            <Menu.Item key={item.conversationID} style={{height:'70px',marginTop:'0' }} >
                <Avatar  size={50} src={qoobee} style={{margin:'10px 5px 10px 5px'}}/>
                <p className="nav-text">{item.conversationName}</p>
                <p className="preview">nà nínà nínà nínà nínà nínà nínà ní</p>
                <div className="dot"></div>
            </Menu.Item>
        );
        return menuItems;
    }

    componentWillReceiveProps(nextProps, nextContext) {
        //after get socket state
        let phone = JSON.parse(localStorage.getItem('user')).phone;
        let request =  {
            messageType: "loadConversations",
            content:{
                phone: phone,
            }
        }
        // nextProps.websocket.send(JSON.stringify(request));

        //load conversations
        if(nextProps.conversationsList !== this.props.conversationsList){
            // console.log('conversationList ',nextProps.conversationsList)
            this.setState({conversationsMap:nextProps.conversationsList})
        }

        //created conversation
        if(nextProps.createdConversation !== this.props.createdConversation){
            console.log('createdConversation ',nextProps.createdConversation)
            let temptObj = this.state.conversationsMap;
            temptObj.push(nextProps.createdConversation);
            this.setState({conversationsMap:temptObj})
        }
    }

    render() {
        return (
                <Layout style={{
                     height: '100%',width:'100%', display:this.props.conversationDisplay, overflow: 'auto'
                }}
                >
                    <div  id="conversations">
                        <Menu theme="light" mode="inline"  onClick={this.showMessage}>
                            {this.showConversations()}
                        </Menu>
                    </div>
                </Layout>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        websocket: state.socketReducer.websocket,
        conversationsList:state.socketReducer.conversationList,
        createdConversation: state.socketReducer.createdConversation,
    }
}
const mapDispatchToProps = (dispatch) => ({
    FetchChatId: (conversationId) => dispatch(ChatActions.fetch_ConversationID(conversationId)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Conversations);