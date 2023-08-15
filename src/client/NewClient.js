import React, {useState} from "react";
import LoginOrRegister from "./LoginOrRegister";

function NewClient() {
    const [showLoginOrRegister,
        setShowLoginOrRegister] = useState(false);

    const handleCancelClick = () => {
        setShowLoginOrRegister(false);
    };

    return (
        <div>

            {showLoginOrRegister
                ? (<LoginOrRegister onCancelClick={handleCancelClick}/>)
                : (
                    <div></div>
                )}
        </div>
    );
}

export default NewClient;
