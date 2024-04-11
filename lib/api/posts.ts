import wordpressInstance from './config';

export const fetchPosts = async () => {
  try {
    const response = await wordpressInstance.post('/', {
      query: `
        {
          posts {
            nodes {
              id
              title
              date
            }
          }
        }
      `,
    });

    return response.data.data.posts.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};