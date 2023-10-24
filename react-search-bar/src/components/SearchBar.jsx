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
                });
                setResults(results);
            });
    }

    return <div className="input-wrapper">

        <input
            type="text"
            placeholder="Type to search..."
            value={input}
            onChange={(e) => {
                setInput(e.target.value);
                console.log("Key registered : " + e.target.value);
            }}
        />

        <button onClick={(e) => {
            console.log("Button clicked : " + input);
            fetchData(input)
        }}>
            <FaSearch id="search-icon"/>
        </button>

    </div>;
}