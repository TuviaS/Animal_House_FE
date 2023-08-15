import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './UserIcon.css';

const UserIcon = ({ loggedIn, client }) => {
  return (
    <div className="userIcon">
      {loggedIn && client ? <p>{client.firstName}</p> : <FontAwesomeIcon icon={faUser} />}
    </div>
  );
};

export default UserIcon;
