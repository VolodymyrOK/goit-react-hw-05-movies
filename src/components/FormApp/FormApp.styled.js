import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  width: 450px;

  height: 48px;
  border-radius: 12px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Input = styled.input`
  font-size: 18px;
  display: flex;
  padding: 8px 12px;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  border-color: transparent;
  overflow: hidden;
  outline: none;
`;

export const Button = styled.button`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  opacity: 1;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  & svg {
    font-size: 24px;
    fill: #3f51b5;
  }
  &:hover {
    opacity: 0.6;
  }
`;
