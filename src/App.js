import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

const Button = styled.button`
  background-color: skyblue;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
