import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
  color: rgba(255, 255, 255, 0.87);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  padding: 10px;
  background: #242424;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  label {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 10px 20px;
    input {
      height: 60%;
      max-width: 150px;
      background: transparent;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      color: white;
      padding: 0px 10px;
    }
  }
`;

export const SearchButton = styled.button`
  background: transparent;
  border: 2px solid #00c86f;
  padding: 0px 20px;
  color: rgba(255, 255, 255, 0.87);
  height: 40px;
  width: 100px;
  border-radius: 4px;
  margin: 10px 0px;
  &:hover {
    color: white;
    font-weight: 800;
    border: 2px solid #00c86f;
    box-shadow: 0px 0px 13px #00c86f;
  }
`;
