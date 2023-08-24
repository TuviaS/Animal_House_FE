// orderService.js
import {axiosInstance as axios} from './axioInstance';

const GET_TEMP_ORDER = (email) => `/order/getTemporalOrder/${email}`;
const CREATE_TEMP_ORDER = (email) => `/order/create/${email}`;
const ADD_TO_ORDER = (email) => `/order/AddToOrder/${email}`;
const REMOVE_FROM_ORDER = (email) => `order/removeFromOrder/${email}`;
const DELETE_TEMPORAL_ORDER = (email) => `order/delete/${email}`;
const CLOSE_TEMPORAL_ORDER = (email) => `order/closeOrder/${email}`;
export const getTemporalOrder = async(email) => {
    try {
        const response = await axios.get(GET_TEMP_ORDER(email));
        return response.data;
    } catch (error) {
        console.error('Error fetching temporal order:', error);
        return [];
    }
};

export const createTemporalOrder = async(email, itemNumber) => {
   
    try {

        const response = await axios.post(CREATE_TEMP_ORDER(email), itemNumber, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating temporal order:', error, email, itemNumber);
        return [];
    }
};

export const addToTemporalOrder = async(email, itemNumber) => {
   
    try {
        const response = await axios.put(ADD_TO_ORDER(email), itemNumber, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding to temporal order:', error);
        return [];
    }
};

export const removeFromTemporalOrder = async(email, itemNumber) => {
    
    try {
        const response = await axios.put(REMOVE_FROM_ORDER(email), itemNumber, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        
        console.error('Error removing to temporal order:', error);
        return [];
    }
};

export const deleteTemporalOrder = async(email) => {
    try {
        const response = await axios.delete(DELETE_TEMPORAL_ORDER(email));
        return response.data;
    } catch (error) {
        console.error('Error deleting temporal order:', error);
        return [];
    }
};

export const closeTemoralOrder = async(email) => {
    try {
        const response = await axios.put(CLOSE_TEMPORAL_ORDER(email));
        return response.data;
    } catch (error) {
        console.error('Error deleting temporal order:', error);
        return [];
    }
};
