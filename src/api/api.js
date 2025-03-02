import axios from 'axios';

const API_URL = 'https://therapist-backend-production.up.railway.app'; // Убедись, что это соответствует твоему серверу

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    throw error;
  }
};

export const fetchUserById = async (userid) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userid}`);
    return response.data;
  } catch (error) {
    console.error(`Ошибка при получении пользователя ${userid}:`, error);
    throw error;
  }
};

export const updateUser = async (userid, userData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userid}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Ошибка при обновлении пользователя ${userid}:`, error);
    throw error;
  }
};
