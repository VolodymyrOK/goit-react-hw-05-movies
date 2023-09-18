import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  return <div>Review: {movieId}</div>;
};

export default Reviews;
