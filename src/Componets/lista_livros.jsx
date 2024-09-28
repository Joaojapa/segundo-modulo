function Book(props) {
    return <li>{ props.title } by { props.author }</li>;
  }
  
  function Library() {
    const books = [
      { title: '1984', author: 'George Orwell' },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
    ];
    return (
      <>
        <h1>Books in the Library</h1>
        <ul>
          {books.map((book) => <Book title={book.title} author={book.author} key={book.title} />)}
        </ul>
      </>
    );
  }

  export default Library