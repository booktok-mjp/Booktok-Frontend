import axios from 'axios';

const PATH = '/api/users';

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(PATH + '/login', { email, password });
    return response.data;
  } catch (error) {
    console.error(`error logging in user ${email}`, error);
    throw error;
  }
};
