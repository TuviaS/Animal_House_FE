import {axiosInstance as axios} from './axioInstance';
const GET_FAVORITE_ITEMS = (email) => `item/getFavoriteItemsList/${email}`;
const ADD_TO_FAVORITE_ITEMS = (email) => `item/AddToFavoriteItemList/${email}`;
const DELETE_FROM_FAVORITE_LIST = (email) => `item/deleteItemFromFavoriteItemList/${email}`;

export const getFavoriteItems = async(email) => {
    try {
        const response = await axios.get(GET_FAVORITE_ITEMS(email));
        
        return response.data;
    } catch (error) {
        
        return null;
    }
};

export const addToFavoriteItems = async(email, itemNumber) => {
    try {
        const response = await axios.put(ADD_TO_FAVORITE_ITEMS(email), itemNumber, {
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

export const deleteFromFavoriteItems = async(email, itemNumber) => {
    try {
        const response = await axios.put(DELETE_FROM_FAVORITE_LIST(email), itemNumber, {
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