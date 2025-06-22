import PrincipalView from './Views/PrincipalView'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from './Components/NavBar';
import ItemsView from './Views/ItemsView';
import MachineView from './Views/MachineView';
import MovesView from './Views/MovesView';
import PokemonView from './Views/PokemonView';
import Footer from './Components/Footer';

import './css/main.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <main className='flex flex-col gap-20'>
          <NavBar/>
          <PrincipalView />
          <Footer />
        </main>
      }/>
      <Route path='/pokemon' element={
        <>
          <NavBar/>
          <PokemonView />
          <Footer />
        </>
      }/>
      <Route path='/items' element={
        <>
          <NavBar/>
          <ItemsView/>
          <Footer />
        </>
      }/>
      <Route path='/machines' element={
        <>
          <NavBar/>
          <MachineView/>
          <Footer />
        </>
      }/>
      <Route path='/move' element={
        <>
          <NavBar/>
          <MovesView/>
          <Footer />
        </>
      }/>
    </Routes>
  </BrowserRouter>
)
