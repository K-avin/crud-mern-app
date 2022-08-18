// api
export const baseUrl = "http://localhost:8000";

// loacal storage
export const token = localStorage.getItem('token');

const userArray = localStorage.getItem('user')
export const user = JSON.parse(userArray)

