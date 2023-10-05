import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Footer,
  Header,
  LinkWrapper,
  LogoIcon,
  LogoWrapper,
  Nav,
  StyledLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <LogoWrapper to="/" title="Home page">
            <LogoIcon />
            Movie search service
          </LogoWrapper>
          <LinkWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </LinkWrapper>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer> © VK, Movie search service, 2023</Footer>
    </Container>
  );
};

export default Layout;
