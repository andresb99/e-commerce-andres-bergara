//import styles
import './App.css';
import { CartProvider } from './context/CartContext';

//import components
import Router from './router/Router'

function App() {
  return (
    <div >
      <CartProvider>
        <Router />
      </CartProvider>
    </div>
  );
}

export default App;
