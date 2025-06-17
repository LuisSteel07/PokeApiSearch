import PrincipalView from './Views/PrincipalView'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import AppBar from './Components/AppBar';
import ItemsView from './Views/ItemsView';
import MachineView from './Views/MachineView';
import MovesView from './Views/MovesView';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <>
          <AppBar/>
          <PrincipalView />
        </>
      }/>
      <Route path='/items' element={
        <>
          <AppBar/>
          <ItemsView/>
        </>
      }/>
      <Route path='/machines' element={
        <>
          <AppBar/>
          <MachineView/>
        </>
      }/>
      <Route path='/move' element={
        <>
          <AppBar/>
          <MovesView/>
        </>
      }/>
    </Routes>
  </BrowserRouter>
)
