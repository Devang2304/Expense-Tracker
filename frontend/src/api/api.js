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

export const getAllTransactions = async (data) =>{
    try {
        return axios.post(`${URL}/get-transection`, data);
    } catch (error) {
        console.log('Error while get all transactions', error);
    }
}


export const deleteTransaction = async (data) =>{
    try {
        return axios.post(`${URL}/delete-transection`, data);
    } catch (error) {
        console.log('Error while delete transaction', error);
    }
}


export const editTransection =async (data)=>{
    try {
        return axios.post(`${URL}/edit-transection`, data);
    } catch (error) {
        console.log('Error while edit transaction', error);
    }
}

export const addTransaction = async (data) =>{
    try {
        return axios.post(`${URL}/add-transection`, data);
    } catch (error) {
        console.log('Error while add transaction', error);
    }
}