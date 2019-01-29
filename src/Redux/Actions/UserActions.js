import {Actions} from '../Constants/Constants';
import {UserService} from '../../Services/UserService';
import {history} from '../../Helper/History';
import {applyMiddleware as dispatch} from "redux";


function login(username, password) {
    return dispatch => {
        UserService.login(username, password)
            .then(user => {
                console.log(user.username);
                localStorage.setItem('user', JSON.stringify(user));
                history.push('/');
                window.location.reload(true);
            })
            .catch(error => {
                console.log('error', error);
                history.push('/login');
                window.location.reload(true);
            });
    }
        function success() { return { type: Actions.USER_SUCCESS_LOGIN, status:'success'} }
}

function logout() {
        console.log('logout');
        UserService.logout();
}



export const UserActions = {
    login,
    logout
};