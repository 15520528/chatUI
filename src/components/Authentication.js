var user = JSON.parse(localStorage.getItem('user'));
const Authentication = {
    isAuthenticated: false,
    user: user,
    setUser(user){
        this.user = user
    },
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}
export default Authentication;