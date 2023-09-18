import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'components/Api/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getDataMoviesCast() {
      try {
        const dataFetchCast = await fetchMovieCast(movieId);
        setResults(dataFetchCast.cast);
      } catch (error) {
        console.error(error.code);
      }
    }
    getDataMoviesCast();
  }, [movieId]);

  return (
    <div>
      {!results.length ? (
        <p>we don't have any information about the cast</p>
      ) : (
        <ul>
          {results.map(({ id, profile_path, character, name }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width="150"
                height="auto"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
