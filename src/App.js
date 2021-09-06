import Text from './text';
import Button from './button';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = e => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Button handleClick={e => handleClick(e)}/>
      <Text text={count}/>
    </div>
  );
}

export default App;
