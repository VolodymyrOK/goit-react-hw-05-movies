import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import page404 from '../../images/404.jpg';
import { Img } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <Img src={page404} alt="Page not found" />
      <Navigate to="/public/404.html" />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NotFound;
