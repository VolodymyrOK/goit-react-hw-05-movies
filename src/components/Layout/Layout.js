import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Footer,
  LinkWrapper,
  LogoIcon,
  LogoWrapper,
  Nav,
  StyledLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <header>
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
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer> © VK, 2023</Footer>
    </Container>
  );
};

export default Layout;
