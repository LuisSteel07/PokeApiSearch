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
        <main className='min-h-screen flex flex-col'>
          <NavBar/>
          <PrincipalView />
          <Footer />
        </main>
      }/>
      <Route path='/pokemon' element={
        <main className='min-h-screen flex flex-col'>
          <NavBar/>
          <PokemonView />
          <Footer />
        </main>
      }/>
      <Route path='/items' element={
        <main className='min-h-screen flex flex-col'>
          <NavBar/>
          <ItemsView/>
          <Footer />
        </main>
      }/>
      <Route path='/machines' element={
        <main className='min-h-screen flex flex-col'>
          <NavBar/>
          <MachineView/>
          <Footer />
        </main>
      }/>
      <Route path='/move' element={
        <main className='min-h-screen flex flex-col'>
          <NavBar/>
          <MovesView/>
          <Footer />
        </main>
      }/>
    </Routes>
  </BrowserRouter>
)
