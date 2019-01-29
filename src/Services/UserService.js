import axios from 'axios';
import {history} from '../Helper/History';
function login(username, password, phone ){
    return new Promise(function(resolve, reject) {
        const user={
            userName: username,
            password: password,
            phone: phone
        };
        const data = JSON.stringify(user);

        axios.post(
            'http://localhost:6898/login',
            data
        )
            .then(res => {
                console.log(res.data);
                if(res.data.status ==='success'){
                    console.log("success register");
                    localStorage.setItem('user', JSON.stringify(user));
                    history.push('/');
                    window.location.reload(true);
                }
                else{
                    resolve("tên tài khoản hoặc mật khẩu không đúng")
                }

            })
            .catch((error)=>{
                console.log(error);
            })
    });
}

function register(username, password, phone){
    return new Promise(function(resolve, reject) {
        const user={
            userName: username,
            password: password,
            phone: phone
        };
        const data = JSON.stringify(user);

        axios.post(
            'http://localhost:6898/register',
            data
        )
            .then(res => {
                console.log(res.data);
                if(res.data.status ==='success'){
                    console.log("success register");
                    localStorage.setItem('user', JSON.stringify(user));
                    history.push('/');
                    window.location.reload(true);
                }
                else{
                    resolve("tài khoản đã tồn tại")
                }

            })
            .catch((error)=>{
                console.log(error);
            })
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    window.location.reload(true);
}

function getFriends() {
    return new Promise(function(resolve, reject) {
        axios.get('http://localhost:6898/loadFriends')
            .then(res => {
                // console.log(res.data)
                resolve(res.data);
            })
            .catch(error=>{
                // resolve(list);
            })
    });
}

export const UserService = {
    login,
    register,
    logout,
    getFriends
};