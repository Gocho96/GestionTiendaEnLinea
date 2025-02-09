import { Product } from "../interfaces/Product";
import "./componentsCSS/CardProduct.css";
import { useNavigate } from "react-router-dom";
import * as ProductService from "../services/ProductService";

interface Props {
  product: Product;
  loadProducts: () => void;
}

const ProductItems = ({ product, loadProducts }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await ProductService.deleteProduct(id);
    loadProducts();
  };

  return (
      <div className="card product-card m-2 p-1 border-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.url_image}
              className="img-fluid rounded-start"
              alt="imagen del producto"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <div>
                <h1 className="fs-5">{product.name}</h1>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary d-block">
                    {"Existencia: " + (product.stock ?? 0)}
                  </small>
                  <small className="text-body-secondary d-block">
                    {"Precio: $" +
                      new Intl.NumberFormat().format(product.price)}
                  </small>
                </p>
              </div>
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-success w-50"
                  onClick={() => navigate(`/update/${product._id}`)}
                >
                  Actualizar
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-danger w-50"
                  onClick={() => product._id && handleDelete(product._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductItems;
