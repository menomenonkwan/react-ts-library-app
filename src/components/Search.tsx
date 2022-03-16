import { useState } from "react"
// styles 
import './Search.css';

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  querySubject: string;
  setQuerySubject: React.Dispatch<React.SetStateAction<string>>;
  getBooks: (e: React.FormEvent) => void;
}

export const Search: React.FC<Props> = ({ query, setQuery, querySubject, setQuerySubject, getBooks }) => {

  return (
    <form onSubmit={getBooks} className='search-form'>
      <select value={querySubject} onChange={(e) => setQuerySubject(e.target.value)}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="term">Term</option>
      </select>

      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        
      />
      <button 
        type="submit"
        disabled={!query ? true : false}
      >Go</button>
    </form>
  )
}
