const JWT_TOKEN_KEY = 'jwtToken';

const setToken = (token) => localStorage.setItem(JWT_TOKEN_KEY, token);

const getToken = () => localStorage.getItem(JWT_TOKEN_KEY);

export default { setToken, getToken };
