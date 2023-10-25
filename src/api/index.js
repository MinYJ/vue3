import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options));
	return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);

console.log('VITE_APP_API_URL');
/*
export function getPosts(params) {
	return axios.get('http://localhost:5000/posts', { params });
}

export function getPostById(id) {
	return axios.get(`http://localhost:5000/posts/${id}`);
}

export function createPost(data) {
	return axios.post('http://localhost:5000/posts', data);
}

export function updatePost(id, data) {
	return axios.put(`http://localhost:5000/posts/${id}`, data);
}

export function deletePost(id) {
	return axios.delete(`http://localhost:5000/posts/${id}`);
}
*/
