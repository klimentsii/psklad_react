
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
import { FittingProduct } from './pages/Products/FittingProduct';
import { GridProduct } from './pages/Products/GridProduct';

import { useEffect, useState } from "react";

import { db } from './firebase/firebase';
import { collection, getDocs } from "firebase/firestore/lite";
import { Page404 } from './pages/Page404';

type CollectionData<T> = {
    data: T[];
    isLoading: boolean;
    error: Error | null;
};

export function useFirestoreCollection<T>(collectionName: string): CollectionData<T> {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const col = collection(db, collectionName);
          const snapshot = await getDocs(col);
          const list = snapshot.docs.map((doc) => doc.data() as T);
          setData(list);
          setIsLoading(false);
        } catch (error) {
          setError(error as Error);
          setIsLoading(false);
        }
      };
      fetchData();
    }, [collectionName]);
  
    return { data, isLoading, error };
}

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ceny/" element={<Catalog />} />
        <Route path="/uslugi/" element={<Services />} />
        <Route path="/profil'/" element={<ProfileProduct />} />
        <Route path="/armatura/" element={<FittingProduct />} />
        <Route path="/setka/" element={<GridProduct />} />
        <Route path="/list/" element={<SheetProduct />} />
        <Route path="/truby/" element={<PipeProduct />} />
        <Route path="/kvadrat/" element={<SquareProduct />} />
        <Route path="/krug/" element={<CircleProduct />} />
        <Route path="/ugolok/" element={<AngularProduct />} />
        <Route path="/zaglushki/" element={<PlugProduct />} />
        <Route path="/polosa/" element={<StripProduct />} />
        <Route path="/contacty/" element={<Contacts />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
