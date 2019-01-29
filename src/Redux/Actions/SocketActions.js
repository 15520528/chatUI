import {Actions} from '../Constants/Constants';

//fetch socket to store
function fetch_socket(websocket) {
    return {type: Actions.SOCKET_FETCHING, websocket: websocket};
}

//fetch message received from other sender
function fetch_message(message) {
    return {type: Actions.MESSAGE_FETCHING, socketMessage: message};
}

//fetch created conversation by other
function fetch_createdConversation(createdConversation) {
    return {type: Actions.CREATED_CONVERSATION_FETCHING, createdConversation:createdConversation}
}

//fetch conversationlist after loaded from server
function fetch_ConversationList(conversationList) {

    return {type: Actions.CONVERSATION_LIST_FETCHING, conversationList:conversationList};
}

export const SocketActions = {
    fetch_socket,
    fetch_message,
    fetch_createdConversation,
    fetch_ConversationList,
};