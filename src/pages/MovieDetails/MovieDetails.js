import { fetchMovieId } from 'components/Api/Api';
import DetailInfo from 'components/DetailInfo/DetailInfo';
import { MessageToast } from 'components/Messages/Messages';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getDataMovieId() {
      try {
        const result = await fetchMovieId(movieId, {
          signal: controller.signal,
        });
        setResult(result);
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      }
    }
    getDataMovieId();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return <div>{result && <DetailInfo result={result} />}</div>;
};

export default MovieDetails;
