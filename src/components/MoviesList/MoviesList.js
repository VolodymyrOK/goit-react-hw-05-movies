import { useLocation } from 'react-router-dom';
import { Img, Li, LinkRef, Title, Ul } from './MoviesList.styled';
import poster from '../../images/holding-blank-card.jpg';

const MoviesList = ({ results }) => {
  const location = useLocation();
  return (
    <Ul>
      {results.map(({ id, title, poster_path }, idx) => (
        <Li key={id + idx}>
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
