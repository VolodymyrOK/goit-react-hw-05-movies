import { fetchMovieId } from 'components/Api/Api';
import DetailInfo from 'components/DetailInfo/DetailInfo';
import { MessageToast } from 'components/Messages/Messages';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function getDataMovieId() {
      try {
        const result = await fetchMovieId(movieId);
        setResult(result);
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      }
    }
    getDataMovieId();
  }, [movieId]);

  return (
    <div>
      {result && <DetailInfo result={result} location={backLinkLocationRef} />}
    </div>
  );
};

export default MovieDetails;
