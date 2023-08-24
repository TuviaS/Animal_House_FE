import {axiosInstance as axios} from './axioInstance';

const GET_ALL_ITEMS = () => `items/getAllItems`;
const REDUCE_ITEM = (itemId) => `item/reduce/${itemId}`;
const ADD_ITEM = (itemId) => `item/increase/${itemId}`;
const GET_FAVORITE_ITEMS = (email) => `item/getFavoriteItemsList/${email}`; // Added favorite items URL

export const getAllItems = async() => {
    try {
        const response = await axios.get(GET_ALL_ITEMS());
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }
};

export const reduceItemFromStock = async(itemId) => {
    try {
        await axios.put(REDUCE_ITEM(itemId));
        // Update the state or handle the response as needed
    } catch (error) {
        console.error('Error reducing items:', error);
        return [];
    }
};

export const AddItemToStock = async(itemId) => {
    try {
        const response = await axios.put(ADD_ITEM(itemId));

    } catch (error) {
        console.log("errrr adding itemId: " + itemId);
        console.error('Error adding items:', error);
        return [];
    }
};

export const getFavoriteItemsList = async(email) => {
    try {
        const response = await axios.get(GET_FAVORITE_ITEMS(email));
        return response.data;
    } catch (error) {
        console.error('Error fetching favorite items:', error);
        return [];
    }
};
