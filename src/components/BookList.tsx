import './BookList.css';

export const BookList = ({ searchedTerm, books }: any) => {

  const filteredBooks: [] = books.map((book: any) => {
  if (!book.author_name) {
    book.author = 'unknown'
  } else {
    book.author = book.author_name[0];
  }
  return book;
})

  return (
    <main>
      <h2>{searchedTerm}</h2>

      <div className="book-list">
        {filteredBooks.map((book: any) => (
          <div key={book.key} className="book-item">
            <p className='title'>{book.title}</p>
            <cite className='author'>{book.author}</cite>
            <p className='year'>{book.first_publish_year}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
