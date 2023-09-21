import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-around;
`;
export const Li = styled.li`
  width: 250px;
  border-radius: 8px;
  padding: 6px;
  box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
  transition: scale 150ms ease-in;
  &:is(:hover, :focus) {
    scale: 0.99;
  }
`;
export const LinkRef = styled(Link)`
  outline: none;
`;
export const Img = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Title = styled.p`
  margin-top: 8px;
  font-size: 24px;
  margin-bottom: 8px;
  text-align: center;
  color: teal;
`;