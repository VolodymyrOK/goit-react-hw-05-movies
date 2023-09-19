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

export const Ul = styled.ul`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-around;
`;
export const Li = styled.li`
  padding: 4px;
  border-radius: 8px;
  flex-basis: calc((100% - 24px) / 8);
  height: auto;
  box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);
`;
export const Img = styled.img``;
export const InfoActor = styled.p`
  margin-top: 8px;
  & > span {
    font-weight: 500;
  }
`;
