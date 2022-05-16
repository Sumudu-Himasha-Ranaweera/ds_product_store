import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:8080"
}) 

export const signIn = (formData) => API.post('/user/sign-in', formData);
export const signUp = (formData) => API.post('/user/sign-up', formData);


