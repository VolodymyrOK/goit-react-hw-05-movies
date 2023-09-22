import { useSearchParams } from 'react-router-dom';
import { MessageToast } from 'components/Messages/Messages';
import { Button, Input, SearchForm } from './FormApp.styled';

const FormApp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';

  const onSearchSubmit = evt => {
    evt.preventDefault();
    let query = evt.target.query.value.trim();
    if (query === '') {
      MessageToast('emptysearch', 'Enter data to Search');
      return;
    }
    query = Date.now() + '/' + evt.target.query.value.trim().toLowerCase();
    setSearchParams({ query });
  };

  return (
    <SearchForm onSubmit={onSearchSubmit}>
      <Input
        defaultValue={queryName}
        type="text"
        name="query"
        placeholder="Search movies..."
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

export default FormApp;
