import {Actions} from "../Constants/Constants";

function socketReducer(state=[], action) {
    switch (action.type) {
        case Actions.SOCKET_FETCHING:
            return {...state, websocket:action.websocket};
            break;
        case Actions.MESSAGE_FETCHING:
            return {...state, socketMessage:action.socketMessage};
            break;
        case Actions.CREATED_CONVERSATION_FETCHING:
            return {...state, createdConversation: action.createdConversation};
            break;
        case Actions.CONVERSATION_LIST_FETCHING:
            return {...state, conversationList:action.conversationList};
            break;
        default:
            return state;
    }
}

export default socketReducer;