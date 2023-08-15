import React, {useState} from 'react';

const SearchBar = ({onSearchSubmit}) => {
    const [searchTerm,
        setSearchTerm] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log("search was issued for - " + searchTerm);
            onSearchSubmit(searchTerm);
            
        }
    };

    return (
        <div className="search-bar">

            <span role="img" aria-label="Search">
                🔍
            </span>

            <input
                type="text"
                className="search-input"
                placeholder="Search for..."
                value={searchTerm}
                onKeyPress={handleKeyPress}
                onChange={handleSearchInputChange}/>
        </div>
    );
};

export default SearchBar;
