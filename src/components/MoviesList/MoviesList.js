import { useLocation } from 'react-router-dom';
import { Img, Li, LinkRef, Title, Ul } from './MoviesList.styled';
import poster from '../../images/holding-blank-card.jpg';
import { nanoid } from 'nanoid';

const MoviesList = ({ results }) => {
  const location = useLocation();
  return (
    <Ul>
      {results.map(({ id, title, poster_path }) => (
        <Li key={nanoid}>
          <LinkRef to={`/movies/${id}`} state={{ from: location }}>
            <Img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : poster
              }
              alt={title}
            />
            <Title>{title}</Title>
          </LinkRef>
        </Li>
      ))}
    </Ul>
  );
};

export default MoviesList;
