import Trending from 'components/Trending/Trending';
import { Button, H1, Input, SearchForm } from './Search.styled';

const SearchMovie = ({ results, query, location, onSearch, onSubmit }) => {
  return (
    <>
      <H1>Search Films</H1>
      <SearchForm onSubmit={onSubmit}>
        <Input
          type="text"
          value={query}
          onChange={onSearch}
          placeholder="Search movies..."
        />
        <Button type="submit">Search</Button>
      </SearchForm>
      <div>
        {results && (
          <Trending
            title={'Searching results'}
            results={results}
            location={location}
          />
        )}
      </div>
    </>
  );
};

export default SearchMovie;
