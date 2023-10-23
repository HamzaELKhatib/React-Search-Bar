import React from 'react';
import './SearchResultsList.css';
import {SearchResult} from "./SearchResult.jsx";

export const SearchResultsList = ({results}) => {
    return <div className="search-results-list">
        {
            results.map((result, id) => {
                return <SearchResult result={result} key={id} />
            } )
        }
    </div>
}