import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Services from './components/Services/Services';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<p>This is Blogs</p>}></Route>
        <Route path='/login' element={<p>This is login</p>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='*' element={<p>Not found</p>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
