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
      <Button
        handleClick={e => handleClick(e)}
        primaryText='Click me'
        primaryColor='green'
      />
      <Text text={counter.value} />
      <Button
        handleClick={e => resetCounter(e)}
        primaryText='Reset counter'
        primaryColor='violet'
      />
    </div>
  );
}

export default App;
