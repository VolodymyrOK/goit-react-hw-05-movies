import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 12px;
  font-size: 18px;
  font-weight: 500;
`;

export const LinkAddInfo = styled(Link)`
  color: #212121;
  font-size: 18px;
  font-weight: 500;
  &:is(:hover, :focus) {
    color: blue;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  gap: 32px;
`;

export const Poster = styled.img`
  border: 1px solid teal;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
`;

export const H1 = styled.h1`
  color: blue;
  margin-bottom: 15px;
`;
export const H2 = styled.h2`
  color: blue;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const H3 = styled.h3`
  color: blue;
  margin-top: 35px;
  margin-bottom: 15px;
`;
export const Overview = styled.p`
  color: #212121;
  width: 90%;
  text-align: justify;
`;
export const Genres = styled.li`
  color: #212121;
  list-style: square;
  margin-left: 32px;
`;
export const AdditionalList = styled.ul`
  display: flex;
  gap: 24px;
`;
