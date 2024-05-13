import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const[country, setCountry] = useState();
  const BASE_URL = "https://restcountries.com/v3.1";


  const myFunction = async () => {
    // run asynchronous tasks here
    try{
      const response = await fetch('https://restcountries.com/v3.1/alpha/' + country);
      const data = await response.json();
      console.log(data[0].flag);
      return data[0].flag;
      }
     catch (error) {
      console.log(error);
  }
  console.log('count', count)
};


useEffect(() => {
  myFunction();
});

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type='text'  value = {country} placeholder = 'country name'/>
        <p> you click {count}</p>
        <button onClick ={() => myFunction(setCount(country))}>GET</button>
        <button onClick = {() => setCount(count+1)}>Increase</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
