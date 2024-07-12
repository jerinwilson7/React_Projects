import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { PageNotFound } from "./Pages/PageNotFound"
import { AppLayout } from "./Pages/AppLayout"
import Homepage from "./Pages/HomePage"
import Product from "./Pages/Product"
import Pricing from "./Pages/Pricing"
import Login from "./Pages/Login"
import { CityList } from "./components/CityList"

import City from "./components/City"
import Form from './components/Form'
import { CitiesProvider } from "./contexts/CitiesContext"
import { CountryList } from "./components/CountryList"
import { AuthProvider } from "./contexts/FakeAuthContext"
import { ProtectedRoute } from "./Pages/ProtectedRoute"


function App() {

  


  return (
    <CitiesProvider>
      <AuthProvider>


    <BrowserRouter>
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path='product' element={<Product/>}/>
      <Route path="pricing" element={<Pricing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="app" element={
        <ProtectedRoute>

          <AppLayout/>
        </ProtectedRoute>
      }>
        <Route index element={<Navigate replace to="cities"/>}/>
        <Route path="cities" element={<CityList/>}/>

        <Route path="cities/:id" element={<City/>}/>

        <Route path="countries" element={<CountryList/>}/>
        <Route path="form" element={<Form/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  )
}

export default App


//xcvcvxcv