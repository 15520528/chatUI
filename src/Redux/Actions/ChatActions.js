import {Actions} from '../Constants/Constants';
import {ChatService} from '../../Services/ChatService';
import {applyMiddleware as dispatch} from "redux";

function fetch_ConversationID(conversationId) {
    return {type: Actions.CHAT_ID_FETCHING, conversationId: conversationId};
}

function get_Message(conversationId, index){
        return dispatch => {
            ChatService.getMessages(conversationId)
                .then(message => {
                    // console.log('message ', message);
                    dispatch(success(message));
                })
                .catch(error => {

                });
        };
    function success(messages) { return { type: Actions.CHAT_MESSAGE_SUCCESS_GET, messages:messages} }
}

export const ChatActions = {
    fetch_ConversationID,
    get_Message,
};