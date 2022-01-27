
import './App.css';
import {Routes, Route, Link , } from "react-router-dom";
import Header from './pages/homepage/header/header.component';
import Footer from './pages/homepage/footer/footer.component';
import Login from './pages/auth/login.component';
import Signup from './pages/auth/signup.component';
import HomePage from './pages/homepage/homepage.component';
import Category from './pages/categories-list/category.component';
import SupplierSection from './pages/supplier/supplier.component';
import Contactus from  './pages/contactus/contactus.component';

import CategoryService from './pages/category-service/category-service-collection.component';
import VendorServiceDetail from './pages/vendor-service-detail/vendor-service-detail.component';
const HatsPage = () => (
  
  <div>
    <h1>HATS PAGE </h1>
    <Link to='/hats/2'>go to deatils hats</Link>
  </div>
);

const HatsPageDetail = props => {
  console.log(props)
 return ( <div>

   <Link to='/hats'>go to hats</Link>
    <h1>HATS Detail PAGE </h1>
  </div>
 )
};


function App() {
  return (
    <div>
      <Header />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
        <Route path="/become-supplier" element={<SupplierSection />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/category-services" element={<CategoryService />} />
        <Route path="/vendor-service-detail/:id" element={<VendorServiceDetail />} />
        <Route path="/hats/:hatsid" element={<HatsPageDetail />} />

       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


