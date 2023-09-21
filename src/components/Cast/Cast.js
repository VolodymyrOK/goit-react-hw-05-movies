import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'components/Api/Api';
import { Delimiter, Img, InfoActor, InfoText, Li, Ul } from './Cast.styled';
import poster from '../../images/no_photo_sm.jpg';
import { MessageToast } from 'components/Messages/Messages';
import { nanoid } from 'nanoid';

const Cast = () => {
  const { movieId } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getDataMoviesCast() {
      try {
        const dataFetchCast = await fetchMovieCast(movieId);
        setResults(dataFetchCast.cast);
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      }
    }
    getDataMoviesCast();
  }, [movieId]);

  return (
    <>
      <Delimiter></Delimiter>
      {!results.length ? (
        <InfoText>We don't have any information about the cast</InfoText>
      ) : (
        <Ul>
          {results.map(({ id, profile_path, character, name }) => (
            <Li key={nanoid}>
              <Img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : poster
                }
                alt={name}
              />
              <InfoActor>{name}</InfoActor>
              <InfoActor>
                <span>Character:</span> {character}
              </InfoActor>
            </Li>
          ))}
        </Ul>
      )}
    </>
  );
};

export default Cast;
