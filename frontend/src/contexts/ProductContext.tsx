import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { getProduct, getProducts, createProduct, updateProduct, deleteProduct } from '../services/ProductService';
import { Product } from '../interfaces/Product';

interface ProductContextType {
  products: Product[];
  createProduct: (product: Product) => Promise<void>;
  getProducts: () => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  getProduct: (id: string) => Promise<Product | undefined>;
  updateProduct: (id: string, product: Product) => Promise<void>;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct debe estar dentro de un ProductProvider");
  }
  return context;
};

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const createProductRequest = useCallback(async (product: Product) => {
    try {
      const res = await createProduct(product);
      if (res && res.data) {
        setProducts(prevProducts => [...prevProducts, res.data]);
      }
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  }, []);

  const getProductsRequest = useCallback(async () => {
    try {
      const res = await getProducts();
      if (res && res.data) {
        setProducts(res.data);
      }
    } catch (error) {
      console.error("Productos no encontrados:", error);
    }
  }, []);

  const deleteProductRequest = useCallback(async (id: string) => {
    try {
      const res = await deleteProduct(id);
      if (res?.status === 204) {
        setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
      }
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  }, []);

  const getProductRequest = useCallback(async (id: string): Promise<Product | undefined> => {
    try {
      const res = await getProduct(id);
      if (res && res.data) {
        return res.data;
      }
    } catch (error) {
      console.error("Producto no encontrado:", error);
    }
  }, []);

  const updateProductRequest = useCallback(async (id: string, product: Product) => {
    try {
      const res = await updateProduct(id, product);
      if (res && res.data) {
        setProducts(prevProducts =>
          prevProducts.map(p => (p._id === id ? res.data : p))
        );
      }
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct: createProductRequest,
        getProducts: getProductsRequest,
        deleteProduct: deleteProductRequest,
        getProduct: getProductRequest,
        updateProduct: updateProductRequest,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};