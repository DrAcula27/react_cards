import './App.css';
import data from './data.js';
import Card from './components/card'

function App() {

  let cardArray = data.map((obj, index) => {
    return (
      <Card obj={obj} key={index}/> 
    )
  })
  return (
    <div className="App">
      <h1>New App</h1>
      {cardArray}
    </div>
  );
}

export default App;
