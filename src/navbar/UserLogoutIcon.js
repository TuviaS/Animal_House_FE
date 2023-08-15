import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

const UserLogoutIcon = ({onLogoutClick}) => {
    return (
        <div className="user-logout-icon-container" onClick={onLogoutClick}>
            <FontAwesomeIcon icon={faSignOutAlt} className="user-logout-icon"/>Log Out
        </div>
    );
};

export default UserLogoutIcon;
