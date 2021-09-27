import { Router } from 'express';
import { productController } from '../controllers/products';

const router = Router();

router.get('/listar/:id?', productController.getProducts);
router.get('/vista-test', productController.getProductsTest);
router.post('/agregar', productController.addProduct);
router.put('/actualizar/:id', productController.updateProduct);
router.delete('/borrar/:id', productController.deleteProduct);

export default router;
