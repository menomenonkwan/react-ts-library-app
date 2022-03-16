import React from 'react'

export const BookList = ({ searchedTerm, books }: any) => {
  // console.log(books);
  return (
    <main>
      <h2>{searchedTerm}</h2>

      {books.map((book: any) => (
        <div key={book.key}>
          <p>{book.title}</p>
          <cite>{book.author_name[0]}</cite>
          <p>{book.first_publish_year}</p>
        </div>
      ))}
    </main>
  )
}
