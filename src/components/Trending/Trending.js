import { H2, Li, LinkRef, Title, Ul } from './Trending.styled';
import poster from '../../images/holding-blank-card.jpg';

const Trending = ({ title, results, location }) => {
  return (
    <>
      {results.length ? <H2>{title}</H2> : ''}
      <Ul>
        {results.map(({ id, title, poster_path }) => (
          <Li key={id}>
            <LinkRef to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : poster
                }
                alt={title}
                width="250"
              />
              <Title>{title}</Title>
            </LinkRef>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default Trending;
