import { Search } from "./Search"
//styles
import './Header.css';

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  querySubject: string;
  setQuerySubject: React.Dispatch<React.SetStateAction<string>>;
  getBooks: (e: React.FormEvent) => void;
  setBooks: React.Dispatch<React.SetStateAction<never[]>>;
  setSearchedTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const Header: React.FC<Props> = ({ query, setQuery, querySubject, setQuerySubject, getBooks, setBooks, setSearchedTerm }) => {

  const handleReset = () => {
    setQuery('');
    setQuerySubject('');
    setBooks([]);
    setSearchedTerm('Welcome');
  }

  return (
    <header>
      <button className="brand" onClick={handleReset}>OpenLibrary</button>
      <Search 
        query={query}
        setQuery={setQuery}
        querySubject={querySubject}
        setQuerySubject={setQuerySubject}
        getBooks={getBooks}
      />
    </header>
  )
}
