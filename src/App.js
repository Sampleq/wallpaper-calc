import { useSelector } from 'react-redux';
import './App.css';
import Description from './components/Description';
import Main from './components/Main';
import { selectShowDescription } from './redux/slices/showDescriptionSlice';

function App() {
  const showDescription = useSelector(selectShowDescription);

  return (
    <div className='App'>{showDescription ? <Description /> : <Main />}</div>
  );
}

export default App;
