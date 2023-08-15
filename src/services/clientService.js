import {axiosInstance as axios} from './axioInstance';

const GET_CLIENT_BY_EMAIL = (email) => `client/get/${email}`;

export const getClientByEmail = async(email) => {
    try {
        const response = await axios.get(GET_CLIENT_BY_EMAIL(email));
        console.log("client fetched: " + response.data.firstName);
        return response.data;
    } catch (error) {
        console.error('Error fetching client by email:', error);
        return null;
    }
};

const CREATE_CLIENT_URL = 'client/create';

export const createClient = async(firstName, lastName, email, password) => {
    try {
        const clientData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        const response = await axios.post(CREATE_CLIENT_URL, clientData);
        console.log('Client created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating client:', error);
        throw error;
    }
};