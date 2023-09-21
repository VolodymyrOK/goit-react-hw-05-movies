import { ButtonLoadMore } from './LoadMore.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
};
