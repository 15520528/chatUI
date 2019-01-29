import React, {Component} from 'react';
import Side from '../Side/Side';
import Messages from "../Messages/Messages";
import {
    Layout
} from 'antd';
import {SocketActions} from "../../Redux/Actions/SocketActions";
import connect from "react-redux/es/connect/connect";


class ChatPage extends Component {
    componentDidMount() {
        var ws = new WebSocket('ws://localhost:6898/websocket');

        ws.onopen = () => {
            //after established socket successfully
            this.props.FetchSocket(ws);

            //client send first request to update online and server send back a conversationsList which client's joined
            let userID = JSON.parse(localStorage.getItem('user')).phone;
            let firstRequest = {
                messageType: "firstRequest",
                content: {
                    userID: userID
                }
            }

            ws.send(JSON.stringify(firstRequest));

            let conversationList = [
                {
                    conversationID: "1",
                    conversationName: "Tâm sự với em 1"
                },
                {
                    conversationID: "3",
                    conversationName: "Hội yêu cún"
                },
                {
                    conversationID: "8",
                    conversationName: "Hội yêu mèo"
                },
                {
                    conversationID: "11",
                    conversationName: "Bộ tộc Golden"
                },
            ];
            // this.props.FetConversationList(conversationList);
            //
            // let createdConversation = {
            //     conversationID:'123',
            //     conversationName:'nam va nhung nguoi ban'
            // }
            // this.props.FetchCreatedConversation(createdConversation);
        };
        ws.onerror = function (error) {
            console.log('WebSocket Error ' + error);
        };
        ws.onmessage = (e) => {
            console.log('Server nà ní: ' + e.data);
            let data = JSON.parse(e.data);
            //if createdConversation type -> this.props.FetchCreatedConversation(e.data);
            if (data.messageType === 'createConversation') {
                let createdConversation = {
                    conversationID: data.content.conversationID,
                    conversationName: data.content.conversationName
                }
                this.props.FetchCreatedConversation(createdConversation);
            }

            //if loadconversations type -> this.props.FetConversationList(e.data);
            if(data.messageType === 'loadAllConversationsForUser' ){
                let conversationList = data.content;
                this.props.FetConversationList(conversationList);
            }
            //if message type -> this.props.FetchMessage();

        };
    }

    render() {
        return (
            <Layout>
                <Side/>
                <Messages/>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => ({
    FetchSocket: (socket) => dispatch(SocketActions.fetch_socket(socket)),
    FetchMessage: (message) => dispatch(SocketActions.fetch_message(message)),
    FetchCreatedConversation: (createdConversation) => dispatch(SocketActions.fetch_createdConversation(createdConversation)),
    FetConversationList: (conversationList) => dispatch(SocketActions.fetch_ConversationList(conversationList)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChatPage);