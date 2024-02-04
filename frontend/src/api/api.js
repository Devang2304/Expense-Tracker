import axios from 'axios';

const URL='http://localhost:5000';

export const registerUser = async (data) =>{
    try {
        return axios.post(`${URL}/register`,data);
    } catch (error) {
        console.log('Error while registering user',error);
    }
}

export const loginUser = async (data) =>{
    try {
        return axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log('Error while login user', error);
    }
}