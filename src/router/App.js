import React from 'react';
import '../styles/App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import ShoppingList from '../pages/ShoppingList';
import Employees from '../pages/Employees';

import { getEmployees } from '../logic/RestHandler';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/">
      <Route index element={<Employees />} loader={getEmployees} />
      <Route path='/shopping-list' element={<ShoppingList />} />
    </Route>
  )
);

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
