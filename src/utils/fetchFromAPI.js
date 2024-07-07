import axios from 'axios';

export const BASE_URL = 'https://yt-api.p.rapidapi.com/dl?id=arj7oStGLkU';

const options = {
  params: {
    maxResults: 50,
  },
	hostname: 'yt-api.p.rapidapi.com',
  headers: {
		'x-rapidapi-key': '764230260dmsh673377cf5d2d57dp1e4899jsna50bf298e8b4',
		'x-rapidapi-host': 'yt-api.p.rapidapi.com'
	}
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
