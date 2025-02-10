import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductForm from "./pages/ProductForm";
import { ToastContainer } from "react-toastify";
import ProductList from "./pages/ProductList";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { ProductProvider } from "./contexts/ProductContext";
import HomePage from "./pages/HomePage";

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
            <Route element={<ProtectedRoute />}>
              <Route path="/mis-productos" element={<ProductList />} />
              <Route path="/nuevo-producto" element={<ProductForm />} />
              <Route path="/update/:id" element={<ProductForm />} />
            </Route>
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
