import { Loader } from 'components/Loader/Loader';
import { Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  AddInfoItem,
  AddInfoWrap,
  AdditionalList,
  Genres,
  H1,
  H2,
  H3,
  HomePage,
  LinkAddInfo,
  LinkBack,
  LinkBackWrapper,
  MainInfo,
  Overview,
  Paragraph,
  Poster,
} from './DetailInfo.styled';
import { IoCaretBackSharp } from 'react-icons/io5';

const DetailInfo = ({ result }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const {
    title,
    overview,
    vote_average,
    backdrop_path,
    genres,
    production_companies,
    production_countries,
    budget,
    homepage,
    release_date,
    spoken_languages,
  } = result;

  return (
    <>
      <LinkBackWrapper>
        <LinkBack to={backLinkLocationRef.current}>
          <IoCaretBackSharp /> Back
        </LinkBack>
      </LinkBackWrapper>
      <MainInfo>
        {backdrop_path && (
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
            width="300"
            height="400"
          />
        )}

        <div>
          <H1>{title}</H1>
          {homepage && (
            <Paragraph>
              Homepage:{' '}
              <HomePage to={homepage} target="_blank">
                {homepage}
              </HomePage>
            </Paragraph>
          )}
          {release_date && (
            <Paragraph>
              Release date: <span>{release_date}</span>
            </Paragraph>
          )}
          {budget > 0 && (
            <Paragraph>
              Budget: <span>{budget}</span>
            </Paragraph>
          )}
          {vote_average > 0 && (
            <Paragraph>
              User score: <span>{Math.round(vote_average * 10)}%</span>
            </Paragraph>
          )}
          <H2>Overview</H2>
          <Overview>{overview}</Overview>
          <AddInfoWrap>
            <AddInfoItem>
              <H2>Genres</H2>
              <ul>
                {genres &&
                  genres.map((genre, ind) => (
                    <Genres key={ind}>{genre.name}</Genres>
                  ))}
              </ul>
            </AddInfoItem>
            <AddInfoItem>
              <H2>Production companies</H2>
              <ul>
                {production_companies &&
                  production_companies.map((production_companie, ind) => (
                    <Genres key={ind}>
                      {production_companie.name +
                        ` / ` +
                        production_companie.origin_country}
                    </Genres>
                  ))}
              </ul>
            </AddInfoItem>
            <AddInfoItem>
              <H2>Production countries</H2>
              <ul>
                {production_countries &&
                  production_countries.map((production_countrie, ind) => (
                    <Genres key={ind}>
                      {production_countrie.iso_3166_1 +
                        ` / ` +
                        production_countrie.name}
                    </Genres>
                  ))}
              </ul>
            </AddInfoItem>
            <AddInfoItem>
              <H2>Spoken languages</H2>
              <ul>
                {spoken_languages &&
                  spoken_languages.map((spoken_language, ind) => (
                    <Genres key={ind}>
                      {spoken_language.english_name +
                        ` / ` +
                        spoken_language.iso_639_1 +
                        ` / ` +
                        spoken_language.name}
                    </Genres>
                  ))}
              </ul>
            </AddInfoItem>
          </AddInfoWrap>

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
