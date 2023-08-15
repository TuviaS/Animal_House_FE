import React from 'react';
import './ClientDetails.css';

const ClientDetails = ({client, handleCloseDetailsClick}) => {
    return (
        <div className="body-container">
            <h2>User Details</h2>
            <p>Name: {client.firstName}
                {client.lastName}</p>
            <p>Email: {client.email}</p>
            <p>Address: {client.address}</p>

            <button onClick={handleCloseDetailsClick} className='button'>Close</button>

        </div>
    );
};

export default ClientDetails;
