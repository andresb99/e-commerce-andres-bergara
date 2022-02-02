//import styles
import './App.css';

//import components
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div >
      <NavBar/>
      <ItemListContainer greetings = {{greeting : 'Hello World! welcome to ', name : 'Games List'}}/>
    </div>
  );
}

export default App;
