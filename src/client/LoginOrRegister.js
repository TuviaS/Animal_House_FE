import React, {useState} from 'react';
import {getClientByEmail} from '../services/clientService';
import './LoginOrRegister.css';

const LoginOrRegister = ({onLoginSubmit, onCancelClick, showLogin, handleClickRegister}) => {
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const [wrongDetails,
        setWrongDetails] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setWrongDetails(false);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setWrongDetails(false);
    };

    const handleLoginSubmit = async(e) => {
        e.preventDefault();

        const client = await getClientByEmail(email);

        if (client && client.password === password) {

            onLoginSubmit(email, password);
        } else {

            setWrongDetails(true);
        }
    };

    const handleCancelClick = () => {
        onCancelClick();
    };

    return (
        <div>
            {showLogin
                ? (
                    <div className="body-container">
                        <div className="login-or-register">
                            <form onSubmit={handleLoginSubmit}>
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

                                {wrongDetails && <p className="error_mes">Wrong details entered.</p>}
                                <div className="button-group">
                                    <button
                                        type="button"
                                        className="button cancel-button"
                                        onClick={handleCancelClick}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="button sign-in-button">
                                        Login
                                    </button>
                                </div>
                            </form>
                            <p className="not-registered-text">Not registered yet? Sign up!</p>
                            <button
                                type="button"
                                className="button sign-up-button"
                                onClick={handleClickRegister}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                )
                : null}
        </div>
    );
};

export default LoginOrRegister;
