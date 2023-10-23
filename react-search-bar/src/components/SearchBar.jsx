import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import './SearchBar.css';

export const SearchBar = ({setResults}) => {

    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return user?.name && value && user.name.toLowerCase().includes(value.toLowerCase());
                } );
                setResults(results);
            });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return <div className="input-wrapper">
        <FaSearch id="search-icon"/>
        <input
            type="text"
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
        />
    </div>;
}