import styled from 'styled-components';

export const Delimiter = styled.div`
  margin-top: 25px;
  display: block;
  width: 100%;
  height: 5px;
  border-radius: 8px;
  background-color: RoyalBlue;
`;

export const InfoText = styled.p`
  margin-top: 25px;
  font-size: 18px;
  font-weight: 500;
  color: red;
`;

export const Li = styled.li`
  margin-top: 35px;
  font-size: 18px;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
`;

export const Author = styled.p`
  margin-bottom: 12px;
  & > span {
    font-weight: 500;
  }
`;
export const TextReview = styled.p`
  margin-bottom: 12px;
  text-align: justify;
  text-indent: 20px;
`;
