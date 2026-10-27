const BASE = "https://jsonplaceholder.typicode.com";
async function getJson(url) { const response = await fetch(url); if (!response.ok) throw new Error(`Request failed (${response.status}). Please try again.`); return response.json(); }
export async function fetchUser(id) { return getJson(`${BASE}/users/${id}`); }
export async function fetchUserPosts(userId) { return getJson(`${BASE}/posts?userId=${userId}`); }
export async function fetchComments(postId) { return getJson(`${BASE}/posts/${postId}/comments`); }
