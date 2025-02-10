import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as ProductService from "../services/ProductService";
import { Product } from "../interfaces/Product";

const ProductForm = () => {
  const navigate = useNavigate();
  const params = useParams<{ id?: string }>();

  const initialState: Product = {
    name: "",
    description: "",
    price: 0,
    url_image: "",
    stock: 0,
  };

  const [product, setProduct] = useState<Product>(initialState);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "price" || name === "stock" ? Number(value) : value;
    setProduct({ ...product, [name]: parsedValue });
  };

  const validateForm = () => {
    const { name, description, price, url_image, stock } = product;
    if (!name || !description || !price || !url_image || !stock) {
      toast.error("Por favor completa todos los campos obligatorios.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      if (params.id) {
        await ProductService.updateProduct(params.id, product);
        toast.success("Producto actualizado correctamente.");
      } else {
        await ProductService.createProduct(product);
        toast.success("Producto creado correctamente.");
        setProduct(initialState);
      }
      navigate("/mis-productos");
    } catch (error) {
      console.error("Error al procesar el producto:", error);
      toast.error("Hubo un error al procesar el producto.");
    }
  };

  const getProduct = async (id: string) => {
    try {
      const res = await ProductService.getProduct(id);
      if (res?.data) {
        setProduct(res.data);
      } else {
        toast.error("No se pudo cargar el producto.");
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      toast.error("Hubo un error al cargar el producto.");
    }
  };

  useEffect(() => {
    if (params.id) getProduct(params.id);
  }, [params.id]);

  return (
    <div
      className="p-4 rounded border border-2 mb-3"
      style={{ maxWidth: "540px", margin: "0 auto" }}
    >
      <h1 className="text-center">
        {params.id ? "Actualizar Producto" : "Nuevo Producto"}
      </h1>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="form-group p-2">
          <input
            type="text"
            name="name"
            placeholder="Nombre del producto"
            className="form-control"
            onChange={handleInputChange}
            value={product.name}
            autoFocus
          />
        </div>

        <div className="form-group p-2">
          <textarea
            name="description"
            rows={3}
            placeholder="Descripción del producto"
            className="form-control"
            onChange={handleInputChange}
            value={product.description}
          ></textarea>
        </div>

        <div className="form-group p-2">
          <p className="text-start fw-bold">Cantidad en existencia:</p>
          <input
            type="number"
            name="stock"
            placeholder="Cantidad en existencia"
            className="form-control w-25"
            onChange={handleInputChange}
            value={product.stock}
          />
        </div>

        <div className="form-group p-2">
          <p className="text-start fw-bold">Precio del producto:</p>
          <input
            type="number"
            name="price"
            placeholder="Precio del producto"
            className="form-control w-25"
            onChange={handleInputChange}
            value={product.price}
          />
        </div>

        <div className="form-group p-2">
          <input
            type="text"
            name="url_image"
            placeholder="URL imagen del producto"
            className="form-control"
            onChange={handleInputChange}
            value={product.url_image}
          />
        </div>

        <button
          type="submit"
          className={`btn ${
            params.id ? "btn-success" : "btn-danger"
          } btn-block mt-3 w-100`}
        >
          {params.id ? "Actualizar Producto" : "Guardar Producto"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
