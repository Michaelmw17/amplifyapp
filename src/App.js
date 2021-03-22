import * as React from 'react'
import './App.css';
import axios from 'axios';
const { useEffect, useState } = React;


// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
// https://randomuser.me/api/
const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
      .then(({data}) => {
        // handle success
        console.log(data);
        return JSON.stringify(data, null, 2);
      }) 
      .catch(err => {
        // handle error
        console.log(err);
      })
      
    
}

function App() {
  const [RandomUserDataJSON, setRandomUserDataJSON] = useState('');
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    fetchRandomData().then((randomData) => {
      setRandomUserDataJSON(randomData || 'No use Data')
    });
    
  }, [])
  return (
    
    <div className="App">
      <h1> hello world</h1>
      <p>{counter}</p>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Increase Counter </button>
      <pre>
        {RandomUserDataJSON}
    </pre>
    </div>
  );
}



export default App;
