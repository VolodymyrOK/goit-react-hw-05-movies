import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBackWrapper = styled.div`
  display: inline-block;
`;

export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  padding: 6px 8px 4px 4px;
  margin-bottom: 12px;
  margin-top: 12px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  color: white;
  transition: background-color 250ms ease-in, color 250ms ease-in;
  box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -webkit-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -moz-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  &:is(:hover, :focus) {
    background-color: #cdcdcd;
    color: RoyalBlue;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 8px;
  & > span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const HomePage = styled(Link)`
  color: blueviolet;
  font-size: 18px;
  font-weight: 500;
`;

export const LinkAddInfo = styled(Link)`
  color: #212121;
  font-size: 18px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background-color 250ms ease-in;
  box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -webkit-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  -moz-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
  &:is(:hover, :focus) {
    color: blue;
    background-color: #cdcdcd;
  }
  &:active {
    background-color: #cdcdcd;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  gap: 32px;
`;

export const Poster = styled.img`
  border: 1px solid teal;
  border-radius: 8px;
  padding: 3px;
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

export const AddInfoWrap = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const AddInfoItem = styled.div`
  flex-basis: calc((100% - 24px) / 2);
  display: flex;
  flex-direction: column;
`;
