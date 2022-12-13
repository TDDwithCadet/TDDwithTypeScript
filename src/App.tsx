import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components';
import { testForTest } from './xUnit/testForTest';
import { TestResult } from './xUnit/testResult';
const SeccessOrFail = styled.div<{isPass:TestResult}>`
  width: 100vw;
  height: 100vh;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => 
    props.isPass.failureCount === 0 ? css`background-color: green` : css`background-color: red`
  }
`
function App() {
  return (
    <SeccessOrFail isPass={testForTest()}>{testForTest().summary()}</SeccessOrFail>
  );
}

export default App;
