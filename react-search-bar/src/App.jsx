import { useState } from 'react'
import './App.css'
import {SearchBar} from "./components/SearchBar.jsx";
import {SearchResultsList} from "./components/SearchResultsList.jsx";

function App() {

    const [results, setResults] = useState([]);

  return (
    <>
        <div className="search-bar-container">
           <SearchBar setResults={setResults}/>
            <SearchResultsList results={results} />
        </div>
    </>
  )
}

export default App
