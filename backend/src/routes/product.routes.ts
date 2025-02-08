import { Router } from 'express';
import * as productController from '../controllers/product.controller';
import { authRequired } from '../middlewares/validateToken';
import { validateSchema } from '../middlewares/validator.middleware';
import { createProductSchema } from '../schemas/product.schema'

const router = Router();

router.get('/productos', productController.getProducts);
router.post('/productos', validateSchema(createProductSchema), productController.createProduct);
router.get('/productos/:id', productController.getProduct);
router.delete('/productos/:id', productController.deleteProduct);
router.put('/productos/:id', productController.updateProduct);

export default router;