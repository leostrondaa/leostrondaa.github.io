import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Link from './components/link';
import Counter from './components/counter';
import Mega from './components/mega';

function App() {
  return (
      <div className='App'>
        <Welcome text="rodrigo faro" cor="blue" />
        <Link url="https://google.com" text="google"/>
        <Counter val='10'/>
        <Mega/>
      </div>
  );
}

export default App;