import axios from 'axios';
import { Post, User } from '../types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    if (response.status !== 200) {
      console.error(`Error: Received status ${response.status}`);
      throw new Error('Failed to fetch posts');
    }
    return response.data;
  } catch (error) {
    console.error('Error in fetchPosts:', error);
    throw error;
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    if (response.status !== 200) {
      console.error(`Error: Received status ${response.status}`);
      throw new Error('Failed to fetch users');
    }
    return response.data;
  } catch (error) {
    console.error('Error in fetchUsers:', error);
    throw error;
  }
};
