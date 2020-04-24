import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cards = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const CardItem = styled.li`
  cursor: pointer;
  padding: 0px 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  min-width: 300px;
  max-width: 300px;
  min-height: 100px;
  border-radius: 8px;
  background: #242424;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0px 0px 13px #00c86f;
    border: 2px solid #00c86f;
  }
  img {
    margin: 10px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  span {
    margin-top: 10px;
    font-size: 13px;
  }
`;

export const Content = styled.div`
  p {
    font-size: 11px;
    color: rgba(47, 255, 163, 0.87);
  }
`;
