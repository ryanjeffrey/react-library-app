import Book from './Book';
import { useBookDetail } from '../../hooks/useBookDetail';
import { Link, useParams } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();
  const { book, loading, error } = useBookDetail(id);

  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;

  return (
    <div>
      <h4>
        <Link to="/books">« Back to Catalog</Link>
      </h4>
      <hr></hr>
      <Book book={book} showDetail />
    </div>
  );
}

export default BookDetail;
