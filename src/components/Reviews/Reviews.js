import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'components/Api/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getDataMoviesReviews() {
      try {
        const dataFetchReviews = await fetchMovieReviews(movieId);

        setResults(dataFetchReviews.results);
      } catch (error) {
        console.error(error.code);
      }
    }
    getDataMoviesReviews();
  }, [movieId]);

  return (
    <div>
      {!results.length ? (
        <p>we don't have any information about the reviews</p>
      ) : (
        <ul>
          {results.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p> {content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
