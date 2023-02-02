import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Card from './components/card'

function App() {
  console.log(data);
  // create an array of <Card /> components that we can display based on the data array

  // difference between map and forEach

  let cardArray = data.map((obj, index) => {
    console.log(obj);
    return (
      <Card obj={obj} key={index}/> 
    )
  })

  console.log(cardArray);

  return (
    <div className="App">
      <h1>New App</h1>
      {cardArray}
    </div>
  );
}

export default App;
