import { useParams } from 'react-router-dom';
import Book from './Book';

const BookParams = () => {
  const { name } = useParams();
console.log("bookparams.")
  return <Book name={name} />;
};

export default BookParams;