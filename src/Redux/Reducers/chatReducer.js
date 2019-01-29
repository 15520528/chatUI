import {Actions} from "../Constants/Constants";

function chatReducer(state=[], action) {
    switch (action.type) {
        case Actions.CHAT_ID_FETCHING:
            return {...state, conversationId:action.conversationId};
            break;
        case Actions.CHAT_MESSAGE_SUCCESS_GET:
            return {...state, messages:action.messages};
            break;
        default:
            return state;
    }
}
export default chatReducer;