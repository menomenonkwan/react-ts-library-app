import { useState } from 'react';
// components
import { Header } from './components/Header';
import { BookList } from './components/BookList';
import { Footer } from './components/Footer';
import { ThreeCircles } from 'react-loader-spinner';
// styles
import './App.css';

const App: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState<string>('');
  const [querySubject, setQuerySubject] = useState<string>('title');
  const [searchedTerm, setSearchedTerm] = useState<string>('Welcome');

  const getBooks = (e: React.FormEvent) => {
    e.preventDefault();
    if(!query) return;

    const fetchBooks = async () => {
      const res = await fetch(`http://openlibrary.org/search.json?${querySubject === 'term' ? 'q' : querySubject}=${query}`);
      const data = await res.json();

      console.log(data.docs);
      console.log(querySubject);
      console.log(query);
      setBooks(data.docs);
      setLoading(false);
      setSearchedTerm(query);
      
      if(!res.ok){
        setError('Ooopsie! There was a problem searching the library. Check again later...');
      }
    }

    setError('');
    setQuery('');
    setLoading(true);
    fetchBooks();
  }

  return (
    <div className="App">
      <Header 
        query={query}
        setQuery={setQuery}
        querySubject={querySubject}
        setQuerySubject={setQuerySubject}
        getBooks={getBooks}
        setBooks={setBooks}
        setSearchedTerm={setSearchedTerm}
      />
      {error && <p className='error'>{error}</p>}
      {loading && 
        <ThreeCircles
          color="red" outerCircleColor="green"
          height={110}
          width={110}
          ariaLabel="three-circles-rotating"
        />
      }
      <BookList books={books} searchedTerm={searchedTerm}/>
      <Footer />
    </div>
  );
}

export default App;
