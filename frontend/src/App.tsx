import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProductForm from "./components/Products/ProductForm";
import { ToastContainer } from "react-toastify";
import ProductList from "./components/Products/ProductList";
import LoginPage from "./components/Authentication/LoginPage";
import RegisterPage from "./components/Authentication/RegisterPage";
import { AuthProvider } from "./components/Context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { ProductProvider } from "./components/Context/ProductContext";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
             
                <Route path="/mis-productos" element={<ProductList />} />
                <Route path="/nuevo-producto" element={<ProductForm />} />
                <Route path="/update/:id" element={<ProductForm />} />
              
            </Routes>
          <ToastContainer />
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
