import { posts } from '.'; // 현재파일의 index를 의미한다

export function getPosts(params) {
	return posts.get('/', { params });
}

export function getPostById(id) {
	return posts.get(`${id}`);
}

export function createPost(data) {
	return posts.post('', data);
}

export function updatePost(id, data) {
	return posts.put(`/${id}`, data);
}

export function deletePost(id) {
	return posts.delete(`/${id}`);
}
