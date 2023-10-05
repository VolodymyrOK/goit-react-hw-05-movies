import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'components/Api/Api';
import { Author, Delimiter, InfoText, Li, TextReview } from './Reviews.styled';
import { MessageToast } from 'components/Messages/Messages';

const Reviews = () => {
  const { movieId } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getDataMoviesReviews() {
      try {
        const dataFetchReviews = await fetchMovieReviews(movieId);

        setResults(dataFetchReviews.results);
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      }
    }
    getDataMoviesReviews();
  }, [movieId]);

  return (
    <>
      <Delimiter></Delimiter>
      {!results.length ? (
        <InfoText>We don't have any information about the reviews</InfoText>
      ) : (
        <ul>
          {results.map(({ id, author, content }) => (
            <Li key={id}>
              <Author>
                <span>Author:</span> {author}
              </Author>
              <TextReview> {content}</TextReview>
            </Li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
