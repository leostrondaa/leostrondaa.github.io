import axios from 'axios';
const API_URL = 'http://localhost:3000/api';

export const api = {
  // GET - Buscar todos
  getUsers: () => axios.get(`${API_URL}/users`),

  // POST - Criar
  createUser: (userData) => axios.post(`${API_URL}/users`, userData),

  // PUT - Atualizar
  updateUser: (id, userData) => axios.put(`${API_URL}/users/${id}`, userData),

  // DELETE - Deletar
  deleteUser: (id) => axios.delete(`${API_URL}/users/${id}`),

  // (LOGIN)
  login: (email, password) =>
    axios.post(`${API_URL}/login`, { email, password }),
};
