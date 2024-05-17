import axios from 'axios';

const API_KEY = 'sHnmGzi1zbYZ1pqI_c_hD3rAjZ5sP9BrpOQU2-pIvFo'; // Replace with your actual Unsplash API key

export const searchPhotos = async (query, page = 1) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, client_id: API_KEY },
    });
    return response.data.results;
};
