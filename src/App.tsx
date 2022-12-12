import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components';
import { testForTest } from './xUnit/testForTest';
const SeccessOrFail = styled.div<{isPass?:string}>`
  width: 100vw;
  height: 100vh;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => 
    props.isPass === '1' ? css`background-color: green` : css`background-color: red`
  }
`
function App() {
  return (
    <SeccessOrFail isPass={testForTest()}>{testForTest() === "1" ? "Success" : "Fail"}</SeccessOrFail>
  );
}

export default App;
