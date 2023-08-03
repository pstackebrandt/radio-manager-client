// file name: App.js

import React from 'react';
import '../styles/App.css';

// Importiere Routing-Funktionen und Komponenten aus der react-router-dom Bibliothek
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

// Importiere die Seitenkomponenten ShoppingList und Employees
import ShoppingList from '../pages/ShoppingList';
import Employees from '../pages/Employees';

// Importiere eine Funktion, um Mitarbeiterdaten abzurufen
import { getEmployees } from '../logic/RestHandler';

// Erstelle einen Router mit zwei Routen: eine Hauptseite, die die Employees-Komponente anzeigt, und eine Einkaufslisten-Seite
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Employees />} loader={getEmployees} />
      <Route path='/shopping-list' element={<ShoppingList />} />
    </Route>
  )
);

// Die Hauptfunktionskomponente der Anwendung, die den oben definierten Router bereitstellt
function App() {
  return (<RouterProvider router={router} />);
}

export default App;