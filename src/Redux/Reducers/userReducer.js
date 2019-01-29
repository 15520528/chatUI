import {Actions} from "../Constants/Constants";

function userReducer(state=[], action){
    switch (action.type) {
        case Actions.USER_LOGIN:
            return {...state, username:action.username};
            break;
        case Actions.USER_SUCCESS_LOGIN:
            return {...state, status:action.status};
            break;
        default:
            return state;
    }
}
export default userReducer;