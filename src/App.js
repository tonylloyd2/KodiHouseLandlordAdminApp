import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import ResestPassword from './Pages/ResestPassword';
import ForgotPassword from './Pages/ForgotPassword';
import Dashboard from './Pages/Dashboard';
import MainLayout from './Components/MainLayout';
import Enquiries from './Pages/Enquiries';
import BlogList from './Pages/BlogList';
import BlogCategoryList from './Pages/BlogCategoryList';
import Orders from './Pages/Orders';
import Customers from './Pages/Customers';
import ColorList from './Pages/ColorsList';
import CategoryList from './Pages/CategoryList';
import BrandList from './Pages/BrandList';
import ProductList from './Pages/ProductList';
import AddBlog from './Pages/AddBlog';
import AddBlogCategory from './Pages/AddBlogCategory';
import AddColor from './Pages/AddColor';
import AddCategory from './Pages/AddCategory';
import AddBrand from './Pages/AddBrand';
import AddProduct from './Pages/AddProduct';

function App() {
  return (
    <>
    
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/reset-password' element={<ResestPassword/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path="admin" element={<MainLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='enquiries' element={<Enquiries/>}/>
          <Route path='blog' element={<AddBlog/>}/>
          <Route path='blog-list' element={<BlogList/>}/>
          <Route path="blog-category" element={<AddBlogCategory/>}/>
          <Route path='blog-category-list' element={<BlogCategoryList/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='customers' element={<Customers/>}/>
          <Route path='color' element={<AddColor/>}/>
          <Route path='color-list' element={<ColorList/>}/>
          <Route path='category' element={<AddCategory/>}/>
          <Route path='category-list' element={<CategoryList/>}/>
          <Route path='brand' element={<AddBrand/>}/>
          <Route path='brand-list' element={<BrandList/>}/>
          <Route path='product' element={<AddProduct/>}/>
          <Route path='product-list' element={<ProductList/>}/>
        </Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
