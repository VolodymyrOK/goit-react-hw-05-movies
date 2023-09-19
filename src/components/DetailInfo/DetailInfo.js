import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  AdditionalList,
  Genres,
  H1,
  H2,
  H3,
  LinkAddInfo,
  LinkBack,
  MainInfo,
  Overview,
  Poster,
} from './DetailInfo.styled';
import { IoCaretBackSharp } from 'react-icons/io5';

const DetailInfo = ({ result, location }) => {
  const { title, overview, vote_average, poster_path, genres } = result;
  return (
    <>
      <LinkBack to={location.current}>
        <IoCaretBackSharp />
        Back
      </LinkBack>
      <MainInfo>
        {poster_path && (
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width="300"
          />
        )}

        <div>
          <H1>{title}</H1>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <H2>Overview</H2>
          <Overview>{overview}</Overview>
          <H2>Genres</H2>
          <ul>
            {genres &&
              genres.map((genre, ind) => (
                <Genres key={ind}>{genre.name}</Genres>
              ))}
          </ul>
          <H3>Additional information</H3>
          <AdditionalList>
            <li>
              <LinkAddInfo to="cast">Cast</LinkAddInfo>
            </li>
            <li>
              <LinkAddInfo to={'review'}>Review</LinkAddInfo>
            </li>
          </AdditionalList>
        </div>
      </MainInfo>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DetailInfo;
