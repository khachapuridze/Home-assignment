const AUTH_TOKEN_KEY = 'authToken'

export function logoutUser() {
    clearAuthToken()
}

export function setAuthToken(token: string) {
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY)    
}

export function clearAuthToken() {
    // axios.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem(AUTH_TOKEN_KEY)
}

export function isLoggedIn() {
    let authToken = getAuthToken()
    return !!authToken;
    // return !!authToken && !isTokenExpired(authToken)

}

export function getUserInfo() {
    if (isLoggedIn()) {
        return getAuthToken()
    }
}