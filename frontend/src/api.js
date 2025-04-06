import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const getArticles = async () => {
    return await axios.get(`${API_URL}/articles`);
};

export const addArticle = async (article) => {
    return await axios.post(`${API_URL}/articles`, article);
};

export const deleteArticle = async (id) => {
    return await axios.delete(`${API_URL}/articles/${id}`);
};
