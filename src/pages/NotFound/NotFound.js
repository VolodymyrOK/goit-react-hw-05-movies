import { Navigate } from 'react-router-dom';
import page404 from '../../images/404.jpg';
import { Img, LinkBack } from './NotFound.styled';
import { IoCaretBackSharp } from 'react-icons/io5';

const NotFound = () => {
  return (
    <>
      <LinkBack to="/">
        <IoCaretBackSharp />
        Back
      </LinkBack>
      <Img src={page404} alt="Page not found" />
      <Navigate to="404.html" />
    </>
  );
};

export default NotFound;
