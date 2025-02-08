import { useEffect, useState } from 'react'
import { Product } from './Product';
import * as ProductService from './ProductService'
import ProductItems from "./ProductItems";
import ".//ProductItems.css";

const ProductList = () => {
    const [products, setProducts] = useState <Product[]>([])

    const loadProducts = async () => {
        try {
            const response = await ProductService.getProducts();
            if(response && response.data){
                const formatedProducts = response.data.map(product =>{
                    return{
                        ...product,
                        createdAt: product.createdAt ? new Date(product.createdAt): new Date,
                        updatedAt: product.updatedAt ? new Date(product.updatedAt): new Date,
                    }
                })
                .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime())
                setProducts(formatedProducts);
            }else{
                console.log('La respuesta no contiene datos validos')
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
      loadProducts();
    
    }, [])
    

    return (
        <div className="row">
          <h2 className='text-center'>Mis productos</h2>
          <div className="product-list">
            {
              products.map((product) => {
                return <ProductItems product={product} key={product._id} loadProducts={loadProducts}/>
              })
            }
          </div>
        </div>
      );
}

export default ProductList
