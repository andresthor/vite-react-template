import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

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
