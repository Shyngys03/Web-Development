import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/';

const login = (credentials) => {
  return axios.post(`${API_URL}login/`, credentials);
};

const register = (credentials) => {
  return axios.post(`${API_URL}register/`, credentials);
};

const logout = () => {
  localStorage.removeItem('token');
};

const authService = {
  login,
  register,
  logout
};

export default authService;