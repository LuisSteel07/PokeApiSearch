import PrincipalView from './Views/PrincipalView'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <PrincipalView />
  </BrowserRouter>
)
