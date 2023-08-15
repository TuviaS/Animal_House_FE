import React, {useState} from 'react';
import './RegisterForm.css';

const RegisterForm = ({handleClickSubmitRegister, handleCancelRegisterClick}) => {
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const [firstName,
        setFirstName] = useState('');
    const [lastName,
        setLastName] = useState('');
    const [address,
        setAddress] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        handleClickSubmitRegister(firstName, lastName, email, password, address);
    };

    return (
        <div className='body-container'>
            <form onSubmit={handleRegisterSubmit} className='register'>
                <div>
                    <label htmlFor="email">Enter your email:</label>
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="input"/>
                </div>
                <div>
                    <label htmlFor="password">Enter your password:</label>
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="input"/>
                </div>
                <div>
                    <label htmlFor="firstName">Enter your first name:</label>
                </div>
                <div>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        className="input"/>
                </div>
                <div>
                    <label htmlFor="lastName">Enter your last name:</label>
                </div>
                <div>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                        className="input"/>
                </div>
                <div>
                    <label htmlFor="address">Enter your address:</label>
                </div>
                <div>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={handleAddressChange}
                        className="input"/>
                </div>
                <div className="button-group">
                    <button
                        type="button"
                        className="button cancel-button"
                        onClick={handleCancelRegisterClick}>
                        Cancel
                    </button>
                    <button type="submit" className="button sign-up-button">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
