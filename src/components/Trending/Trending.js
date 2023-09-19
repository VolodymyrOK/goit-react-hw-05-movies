import { H1, Li, LinkRef, Title, Ul } from './Trending.styled';

const Trending = ({ results, location }) => {
  return (
    <>
      <H1>Trending today</H1>
      <Ul>
        {results.map(({ id, title, poster_path }) => (
          <Li key={id}>
            <LinkRef to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
