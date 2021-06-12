import styled from "styled-components";

export const CounterStyle = styled.div`
  flex: 0 0 auto;
  min-width: 10rem;
  margin-right: 1.125rem;
  display: flex;
  height: 2.7rem;
  width: 50px;

  & > button {
    cursor: pointer;
    -webkit-box-flex: 1;
    flex-grow: 1;
    height: 100%;
    border: 1px solid rgb(224, 224, 224);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    -webkit-box-pack: center;
    justify-content: center;
    touch-action: manipulation;
    padding: 0;
    background: transparent;
    box-shadow: none;

    &:first-child{
      border-radius: 5px 0px 0px 5px;
    }

    &:last-child{
      border-radius: 0px 5px 5px 0px;
    }
  }
`;

export const InputStyle = styled.div`
  position: relative;
  -webkit-box-flex: 1;
  flex-grow: 1;
  border-top: 1px solid rgb(224, 224, 224);
  border-bottom: 1px solid rgb(224, 224, 224);
  width: 2.5rem;
  max-width: 5rem;

  & > input {
    background-image: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0px;
    cursor: text;
    text-align: center;
    text-indent: 0px;
    text-rendering: auto;
    text-shadow: none;
    word-spacing: 0px;
    padding: 0px;
    -webkit-writing-mode: horizontal-tb;
    writing-mode: horizontal-tb;
    appearance: none;
    color: rgb(0, 0, 0);
  }
`;
