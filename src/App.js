
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Landing from './components/Landing';
import Products from './components/Products';
import Callus from './components/Callus';
import Benefits from './components/Benefits';
import Details from './components/Details';
import { Provider } from 'react-redux';
import store from './store';
import Checkout from './components/Checkout';
function App() {
  return (
  <Provider store={store}>
    <Router>
      <MainLayout>
         <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/callus' element={<Callus/>} />
          <Route path='/benefits' element={<Benefits/>} />
          <Route path="/checkout" element={ <Checkout />} />
          <Route path="/details" element={ <Details />} />
        </Routes>
      </MainLayout>
    </Router>
  </Provider>
   
  );
}

export default App;
