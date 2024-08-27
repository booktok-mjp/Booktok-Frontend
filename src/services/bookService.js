import axios from 'axios';

const PATH = '/api/books';

export const getAllBooks = async () => {
  try {
    const response = await axios.get(PATH + '/all');
    return response.data;
  } catch (error) {
    console.error('error fetching all books', error);
    throw error;
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(PATH + `/${id}`, id);
    return response.data;
  } catch (error) {
    console.error(`error fetching book with id ${id}`, error);
    throw error;
  }
};
