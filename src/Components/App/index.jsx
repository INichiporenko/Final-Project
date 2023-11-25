import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import All_ProductsPage from "../../Pages/All_ProductsPage";
import All_salesPage from "../../Pages/All_salesPage";
import CartPage from "../../Pages/CartPage";
import CategoriePage from "../../Pages/CategoriePage";
import ErrorPage from "../../Pages/ErrorPage";
import MainPage from "../../Pages/MainPage";
import SingleCategoriesPage from "../../Pages/SingleCategoriesPage";
import SingleProductPage from "../../Pages/SingleProductPage";
import { fetchCategories } from "../../store/slice/categoriesSlice";
import { fetchProducts } from "../../store/slice/productsSlice";
import Footer from "../Footer";
import Nav from "../Nav";
import './style.css'


function App(){

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());

  })


  return (
    <div>
      <Nav />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/main_page" element={<MainPage/>}/>
        <Route path="/categories/all" element={<CategoriePage/>}/>
        <Route path="/products/all" element={<All_ProductsPage/>}/>
        <Route path="/all_sales" element={<All_salesPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/product/:id" element={<SingleProductPage/>}/>
        <Route path="/categoryProducts/:categoryId" element={<SingleCategoriesPage/>} /> 
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;