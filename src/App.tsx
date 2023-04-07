
import './App.scss';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Footer } from './components/Footer';
import { Services } from './pages/Services';
import { ProfileProduct } from './pages/Products/ProfileProduct';
import { SheetProduct } from './pages/Products/SheetProduct';
import { PipeProduct } from './pages/Products/PipeProduct';
import { SquareProduct } from './pages/Products/SquareProduct';
import { CircleProduct } from './pages/Products/CircleProduct';
import { AngularProduct } from './pages/Products/AngularProduct';
import { PlugProduct } from './pages/Products/PlugProduct';
import { StripProduct } from './pages/Products/StripProduct';
import { Contacts } from './pages/Contacts';

import { fetchCollection } from './firebase/firebase';

function App() {
  fetchCollection();
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<ProfileProduct />} />
        <Route path="/sheet" element={<SheetProduct />} />
        <Route path="/pipe" element={<PipeProduct />} />
        <Route path="/square" element={<SquareProduct />} />
        <Route path="/circle" element={<CircleProduct />} />
        <Route path="/angular" element={<AngularProduct />} />
        <Route path="/plug" element={<PlugProduct />} />
        <Route path="/strip" element={<StripProduct />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
